import React from 'react';
import { Navbar } from '../(marketing)';

const AboutPage: React.FC = () => {
  return (
  <div><Navbar/>
    <div className='bg-gradient-to-r bg-blue-950 text-white min-h-screen py-8 px-4 lg:px-8'>
      <div className='container mx-auto'>
        <article className='bg-white text-gray-900 shadow-lg rounded-lg p-6 lg:p-12 border border-gray-200'>
          <header className='text-center mb-8'>
            <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
              About Us
            </h1>
          </header>
          <section className='mb-6'>
            <p className='text-lg leading-relaxed'>
              Welcome to CreatifyAI, the cutting-edge AI-powered tool designed to revolutionize the way you create and manage content. At CreatifyAI, our mission is to empower individuals and businesses with advanced tools that streamline content creation, enhance productivity, and drive innovation.
            </p>
          </section>
          <section className='mb-6'>
            <h2 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4'>
              Our Story
            </h2>
            <p className='text-lg leading-relaxed'>
              Founded with a vision to simplify and elevate the content creation process, CreatifyAI combines the latest advancements in artificial intelligence with user-centric design. Our team is passionate about leveraging technology to solve real-world challenges, making high-quality content creation accessible to everyone.
            </p>
          </section>
          <section className='mb-6'>
            <h2 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4'>
              Our Vision
            </h2>
            <p className='text-lg leading-relaxed'>
              We envision a world where creating compelling content is effortless and enjoyable. By harnessing the power of AI, we aim to transform how you generate ideas, craft messages, and engage with your audience. Whether you’re a marketer, blogger, developer, or social media manager, CreatifyAI is here to support your creative journey.
            </p>
          </section>
          <section className='mb-6'>
            <h2 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4'>
              Our Values
            </h2>
            <ul className='list-disc list-inside pl-5 space-y-4 text-lg'>
              <li>
                <strong className='font-medium text-gray-900'>Innovation:</strong> We continuously explore new technologies and approaches to enhance our tool and deliver exceptional value.
              </li>
              <li>
                <strong className='font-medium text-gray-900'>User-Centricity:</strong> Your needs and feedback drive our development process. We strive to create intuitive and effective solutions tailored to your requirements.
              </li>
              <li>
                <strong className='font-medium text-gray-900'>Integrity:</strong> We are committed to maintaining the highest standards of privacy and security, ensuring that your data is handled with the utmost care.
              </li>
            </ul>
          </section>
          <section className='mb-6'>
            <h2 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4'>
              Our Features
            </h2>
            <ul className='list-disc list-inside pl-5 space-y-4 text-lg'>
              <li>Email Generation and Rewriting</li>
              <li>Blog Titles, Content, and Topic Ideas</li>
              <li>Instagram Posts, Hashtags, and Ideas</li>
              <li>Code Generation, Debugging, and Explanation</li>
              <li>YouTube SEO Titles, Descriptions, and Tags</li>
              <li>English Grammar Checking</li>
              <li>Tagline and Product Description Generation</li>
              <li>Plagiarism-Free Article Rewriting</li>
              <li>Text Improvement and Emoji Integration and more...</li>
            </ul>
          </section>
          <section>
            <h2 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4'>
              Get in Touch
            </h2>
            <p className='text-lg leading-relaxed'>
              We are always eager to hear from our users and partners. If you have any questions, feedback, or collaboration ideas, please reach out to us at:
            </p>
            <p className='text-lg font-semibold mt-4'>
              CreatifyAI<br />
              creatifyio@gmail.com<br />
              +94 70 794 0599
            </p>
            <p className='text-lg font-semibold text-gray-900 mt-4'>
              Thank you! for choosing CreatifyAI. We look forward to being part of your creative journey and helping you achieve your content goals!
            </p>
          </section>
        </article>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
