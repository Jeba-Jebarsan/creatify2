import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy, PauseCircle, PlayCircle, Share, Speaker, Speech, Star } from 'lucide-react';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import { AIOutput } from '@/utils/schema';
import { and, eq } from 'drizzle-orm';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>();
  const [buttonText, setButtonText] = useState('Copy');
  const [hasContent, setHasContent] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [lastContent, setLastContent] = useState<string>('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const { user } = useUser();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
    setHasContent(!!aiOutput.trim());

    if (aiOutput.trim()) {
      setShowFeedback(true);
    }

    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      const femaleVoice = availableVoices.find(voice => voice.name.includes('Google US English Female'));
      setSelectedVoice(femaleVoice || null);
    };

    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
    }

    if (!aiOutput.trim() && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  }, [aiOutput]);

  const handleCopy = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    
    navigator.clipboard.writeText(markdownContent)
      .then(() => {
        setButtonText('Copied!');
        setTimeout(() => setButtonText('Copy'), 2000);
      })
      .catch(err => console.error('Failed to copy!', err));
  };

  const handleShare = async () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AI Generated Content',
          text: markdownContent,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      console.log('Web Share API not supported');
      handleCopy(); // Fallback to copy if sharing not supported
    }
  };

  const handleSpeech = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    
    if (markdownContent.trim() && 'speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(markdownContent);
      if (selectedVoice) {
        speech.voice = selectedVoice;
      }
      speech.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(speech);
      setLastContent(markdownContent);
      setIsSpeaking(true);
      setIsPaused(false);
    } else {
      console.error('Speech synthesis not supported or content is empty');
    }
  };

  const handlePauseSpeech = () => {
    if (isSpeaking && 'speechSynthesis' in window) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    }
  };

  const handleEditorChange = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    setHasContent(!!markdownContent.trim());

    if (isSpeaking && markdownContent !== lastContent) {
      if (!markdownContent.trim()) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
      } else {
        window.speechSynthesis.cancel();
        handleSpeech();
      }
    }

    if (!markdownContent.trim() && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  const handleRating = async (value: number) => {
    setRating(value);
    
    if (!user?.emailAddresses[0]?.emailAddress) {
      console.error('User email not found');
      return;
    }

    try {
      // First, find the existing AIOutput record
      const result = await db
        .update(AIOutput)
        .set({
          userFeedback: value.toString()
        })
        .where(
          and(
            eq(AIOutput.airesponse, aiOutput),
            eq(AIOutput.createdBy, user.emailAddresses[0].emailAddress)
          )
        );

      if (!result) {
        throw new Error('Failed to update feedback');
      }

      // Show success message
      setRating(value);
    } catch (error) {
      console.error('Error saving feedback:', error);
      // Optionally show an error message to the user
    }
  };

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        {hasContent && (
          <div className='flex space-x-2'>
            <Button 
              onClick={handleCopy}
              className='bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-600 hover:to-blue-500 rounded-lg transition-colors duration-300 flex items-center justify-center'>
              <Copy className="w-4 h-4 mr-2"/>{buttonText}
            </Button>
            <Button 
              onClick={handleShare}
              className='bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-600 hover:to-blue-500 rounded-lg transition-colors duration-300 flex items-center justify-center'>
              <Share className="w-4 h-4 mr-2"/>Share
            </Button>
            <Button 
              onClick={isSpeaking ? handlePauseSpeech : handleSpeech}
              className={`bg-gradient-to-r text-white hover:bg-gradient-to-l rounded-lg transition-colors duration-300 flex items-center justify-center 
                ${isSpeaking ? '' : 'to-blue-900'}`}>
              {isSpeaking ? (isPaused ? <PlayCircle className="w-4 h-4 mr-2"/> : <PauseCircle className="w-4 h-4 mr-2"/>) : <Speech className="w-4 h-4 mr-2"/>}
              {isSpeaking ? (isPaused ? 'Resume' : 'Pause') : 'Read'}
            </Button>
          </div>
        )}
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your results will emerge here..."
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={handleEditorChange}
      />
      {showFeedback && (
        <div className="p-6 border-t bg-gradient-to-r from-blue-50 to-purple-50">
          <h3 className="text-xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-transparent bg-clip-text">
            How was your experience?
          </h3>
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-10 h-10 cursor-pointer transform transition-all duration-300 hover:scale-125 ${
                  star <= rating 
                    ? 'fill-yellow-400 text-yellow-400 drop-shadow-lg' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
                onClick={() => handleRating(star)}
              />
            ))}
          </div>
          {rating > 0 && (
            <p className="text-center mt-6 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-fade-in">
              Thanks for your valuable feedback! 🎉
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default OutputSection;
