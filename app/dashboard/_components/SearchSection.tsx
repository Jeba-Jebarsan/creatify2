"use client";
import { Search, SearchIcon } from 'lucide-react';
import React from 'react';

function SearchSection({ onSearchInput }: any) {
  return (
    <div className='p-10 bg-gradient-to-br from-blue-700 via-purple-600 to-pink-500 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold'>Find All Templates</h2>
      <p>What Are You Planning to Create?</p>
      <div className='w-full flex justify-center '>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[40%]'>
          <SearchIcon className='text-primary' />
          <input
            type='text'
            placeholder='Explore here...'
            onChange={(event) => onSearchInput(event.target.value)}
            className='bg-transparent w-full outline-none text-black'
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
