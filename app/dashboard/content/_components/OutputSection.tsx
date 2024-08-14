import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>();
  const [buttonText, setButtonText] = useState('Copy');
  const [hasContent, setHasContent] = useState(false);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
    setHasContent(!!aiOutput.trim()); // Set hasContent based on aiOutput
  }, [aiOutput]);

  const handleCopy = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    
    navigator.clipboard.writeText(markdownContent)
      .then(() => {
        setButtonText('Copied!');
        setTimeout(() => setButtonText('Copy'), 2000); // Reset after 2 seconds
      })
      .catch(err => console.error('Failed to copy!', err));
  };

  const handleEditorChange = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    setHasContent(!!markdownContent.trim()); // Update hasContent based on editor content
  };

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        {hasContent && (
          <Button 
            onClick={handleCopy}
            className='bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-600 hover:to-blue-500 rounded-lg transition-colors duration-300 flex items-center justify-center'>
            <Copy className="w-4 h-4 mr-2"/>{buttonText}
          </Button>
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
