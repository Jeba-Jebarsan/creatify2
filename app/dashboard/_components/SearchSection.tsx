"use client";
import { SearchIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function SearchSection({ onSearchInput }: { onSearchInput: (value: string) => void }) {
  const [titles, setTitles] = useState<string[]>([]);

  useEffect(() => {
    const templateTitles = [
      "Write Email", "Rewrite Your Email", "Blog Title", "Blog Content",
      "Blog Topic Ideas", "YouTube SEO Titles", "YouTube Description",
      "YouTube Tags", "Rewrite Article (Plagiarism Free)", "Text Improver",
      "Add Emojis to Text", "Instagram Post Generator", "Instagram Hash Tag Generator",
      "Instagram Post/Reel Idea", "English Grammar Check", "Write Code",
      "Explain Code", "Code Bug Detector", "Tagline Generator", "Product Description"
    ];
    setTitles(templateTitles);
  }, []);

  return (
    <div className='p-10 bg-blue-800 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold'>Find All Templates</h2>
      <p>What Are You Planning to Create?</p>
      <div className='w-full flex justify-center items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[40%]'>
          <SearchIcon className='text-primary' />
          <input
            type='text'
            placeholder='Explore here...'
            onChange={(event) => onSearchInput(event.target.value)}
            className='bg-transparent w-full outline-none text-black placeholder-gray-500'
          />
        </div>
      </div>
      <div className='overflow-hidden w-full mt-8'>
        <motion.div 
          className='flex whitespace-nowrap'
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {titles.concat(titles).map((title, index) => (
            <motion.div 
              key={index} 
              className='inline-block mx-4 bg-white rounded-lg p-4 text-black'
              whileHover={{ scale: 1.1 }}
            >
              <div className='flex items-center'>
                <h3 className='font-bold whitespace-normal'>{title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SearchSection;
