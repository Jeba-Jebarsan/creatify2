"use client";
import { SearchIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function SearchSection({ onSearchInput }: { onSearchInput: (value: string) => void }) {
  const [titles, setTitles] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredTitles, setFilteredTitles] = useState<string[]>([]);

  useEffect(() => {
    const templateTitles = [
      "Write Email", "Rewrite envEmail", "Blog Title", "Blog Content",
      "Blog Topic Ideas", "YouTube SEO Titles", "YouTube Description",
      "YouTube Tags", "Rewrite Article (Plagiarism Free)", "Text Improver",
      "Add Emojis to Text", "Instagram Post Generator", "Instagram Hash Tag Generator",
      "Instagram Post/Reel Idea", "English Grammar Check", "Write Code",
      "Explain Code", "Code Bug Detector", "Tagline Generator", "Product Description"
    ];
    setTitles(templateTitles);
    setFilteredTitles(templateTitles);
  }, []);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onSearchInput(value);
    const filtered = titles.filter(title => 
      title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTitles(filtered);
  };

  return (
    <div className='p-10 bg-blue-800 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold'>What will you create today?</h2>
      <p>What Are You Planning to Create?</p>
      <div className='w-full flex justify-center items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[40%]'>
          <SearchIcon className='text-primary' />
          <input
            type='text'
            placeholder='Explore here...'
            onChange={(event) => handleSearch(event.target.value)}
            className='bg-transparent w-full outline-none text-black placeholder-gray-500'
          />
        </div>
      </div>
      {filteredTitles.length === 0 ? (
        <div className='flex flex-col items-center justify-center mt-8'>
          <Image
            src="https://cdn-icons-png.freepik.com/256/12248/12248594.png?ga=GA1.1.1456850274.1722662440&semt=ais_hybrid"
            alt="No results found"
            width={256}
            height={256}
          />
          <p className='text-white mt-4'>No templates found matching your search</p>
        </div>
      ) : (
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
            {filteredTitles.concat(filteredTitles).map((title, index) => (
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
      )}
    </div>
  );
}

export default SearchSection;
