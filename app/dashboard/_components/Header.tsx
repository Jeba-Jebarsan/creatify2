"use client";
import { UserButton } from '@clerk/nextjs';
import { Search, Menu } from 'lucide-react';
import React from 'react';

// Define the type for the props
interface HeaderProps {
  toggleSideNav: () => void; // Function that returns void
}

function Header({ toggleSideNav }: HeaderProps) {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        {/* Customizing the Menu icon */}
        <button
          onClick={toggleSideNav}
          className='md:hidden text-blue-800'
          aria-label="Toggle side navigation"
        >
          <Menu 
            size={32} // Custom size
            strokeWidth={2} // Custom line thickness
            className="text-blue-500 hover:text-blue-700 transition-colors" // Custom color with hover effect
          />
        </button>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
          <Search />
          <input type='text' placeholder='search...' className='outline-none' />
        </div>
      </div>
      <div>
        <h2 className='bg-white p-1 rounded-full text-xs text-white px-2'></h2>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
