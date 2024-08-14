import React from 'react'
import { cn } from '@/lib/utils';

interface props{
    children: React.ReactNode;
    className?:string;

}
const WrapperA=({children,className}:props)=> {
  return (
    <div className={cn(
        "h-full w-full mx-auto max-w-screen-xl px-4 md:px-0",
        className
    )}>
        {children}
      
    </div>
  )
}

export default WrapperA
