'use client'; // Ensures this component is treated as a client-side component

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <Button variant="ghost" className="text-primary" onClick={handleCopy}>
      {copied ? 'Copied!' : 'Copy'}
    </Button>
  );
};

export default CopyButton;
