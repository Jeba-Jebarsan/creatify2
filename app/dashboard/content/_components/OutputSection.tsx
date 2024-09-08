import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy, PauseCircle, PlayCircle, Speaker, Speech } from 'lucide-react'; // Ensure Speaker is available

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>();
  const [buttonText, setButtonText] = useState('Copy');
  const [hasContent, setHasContent] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false); // Track if speech is active
  const [isPaused, setIsPaused] = useState(false); // Track if speech is paused
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null); // Default to null
  const [lastContent, setLastContent] = useState<string>(''); // Track last spoken content

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
    setHasContent(!!aiOutput.trim());

    // Load available voices
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      // Find a female voice; you may need to adjust the name and lang to match the available voices
      const femaleVoice = availableVoices.find(voice => voice.name.includes('Google US English Female'));
      setSelectedVoice(femaleVoice || null);
    };

    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices(); // Load voices immediately
    }

    // Auto-stop speech if content is removed
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
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      window.speechSynthesis.speak(speech);
      setLastContent(markdownContent); // Track the current content
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

    // Stop and restart speech if the content changes
    if (isSpeaking && markdownContent !== lastContent) {
      if (!markdownContent.trim()) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
      } else {
        window.speechSynthesis.cancel();
        handleSpeech(); // Restart speech with the updated content
      }
    }

    // Auto-stop speech if content is removed
    if (!markdownContent.trim() && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
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
    </div>
  );
}

export default OutputSection;
