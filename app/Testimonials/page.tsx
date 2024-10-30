import React from 'react';
import { Navbar } from '../(marketing)';

const TestimonialsPage = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-gradient-to-r bg-blue-950 text-white min-h-screen py-8 px-4 lg:px-8'>
        <div className='container mx-auto'>
          <h1 className='text-4xl font-bold text-center mb-8'>Testimonial</h1>

          <div className='flex flex-col items-center'>
            <img 
              src='/jeb.jpg'  // Path relative to the public directory
              //alt='Thomas Jebarsan' 
              className='rounded-full w-64 h-36 mb-6'
            />
            <blockquote className='bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto'>
              <p className='text-xl italic'>
                "At CreatifyAI, our mission has always been to empower individuals and businesses with advanced AI tools that make content creation effortless and effective. From the beginning, I’ve been passionate about creating a platform that not only streamlines content production but also sparks creativity and innovation. Seeing our tool make a real difference in how our users generate content is incredibly fulfilling. I believe that CreatifyAI is not just a tool, but a partner in our users’ creative journeys, and I am proud to be part of this transformative experience."
              </p>
              <footer className='mt-4 text-right font-semibold'>
                — Thomas Jebarsan, Creator of CreatifyAI
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
