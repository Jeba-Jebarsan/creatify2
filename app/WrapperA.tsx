// WrapperA.tsx
import React from 'react';

interface WrapperAProps {
  children: React.ReactNode;
  className?: string;
  id?: string;  // Add this line
}

const WrapperA: React.FC<WrapperAProps> = ({ children, className, id }) => {
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
};

export default WrapperA;
