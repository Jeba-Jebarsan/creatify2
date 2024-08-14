import React from 'react';
import { Navbar } from '../(marketing)';

const BlogPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-blue-950 text-white min-h-screen py-8 px-4 lg:px-8'>
        <div className='container mx-auto'>
          <article className='bg-white shadow-lg rounded-lg p-6 lg:p-12 border border-gray-200 relative overflow-hidden'>
            {/* Glowing Border Effect */}
            <div className='absolute inset-0 border-2 border-blue-500 rounded-lg blur-lg ring-4 ring-blue-500 ring-opacity-50'></div>
            <header className='text-center mb-8 relative z-10'>
              <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
                Introducing CreatifyAI: Your Ultimate Content Creation Companion
              </h1>
            </header>
            {/* Headline */}
            <section className='text-center mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900'>
                Revolutionize Your Content Creation Today
              </h2>
            </section>
            <section className='mb-6'>
              <p className='text-lg text-gray-700 leading-relaxed'>
                In today’s fast-paced digital world, creating high-quality content efficiently is crucial for success. Whether you’re a marketer, blogger, or developer, managing and generating content can be a daunting task. That’s where CreatifyAI steps in—your ultimate AI-powered tool designed to streamline and enhance your content creation process.
              </p>
            </section>
            <section className='mb-6'>
              <h2 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4'>
                What is CreatifyAI?
              </h2>
              <p className='text-lg text-gray-700 leading-relaxed'>
                CreatifyAI is a state-of-the-art AI content creation tool that provides an array of features to simplify and elevate your content strategy. From generating compelling blog posts to crafting engaging Instagram captions, our tool is designed to meet diverse content needs with precision and creativity.
              </p>
            </section>
            <section className='mb-6'>
              <h2 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4'>
                Key Features of CreatifyAI
              </h2>
              <ul className='list-disc list-inside pl-5 space-y-4 text-lg text-gray-700'>
                <li>
                  <strong className='font-medium text-gray-800'>Generate and Rewrite Emails:</strong> Create professional emails effortlessly or refine existing ones to ensure clarity and impact.
                </li>
                <li>
                  <strong className='font-medium text-gray-800'>Craft Blog Titles and Content:</strong> Generate captivating blog titles and detailed content to keep your audience engaged and informed.
                </li>
                <li>
                  <strong className='font-medium text-gray-800'>Blog Topic Ideas:</strong> Overcome writer’s block with fresh and relevant blog topic suggestions.
                </li>
                <li>
                  <strong className='font-medium text-gray-800'>Instagram Content:</strong> Generate engaging Instagram posts, find the perfect hashtags, and brainstorm post and reel ideas to boost your social media presence.
                </li>
                <li>
                  <strong className='font-medium text-gray-800'>Code Generation and Debugging:</strong> Write and debug code with ease. CreatifyAI helps you generate code snippets, detect bugs, and explain code functionality.
                </li>
                <li>
                  <strong className='font-medium text-gray-800'>YouTube Optimization:</strong> Enhance your YouTube content with SEO-friendly titles, descriptions, and tags to improve visibility and reach.
                </li>
                <li>
                  <strong className='font-medium text-gray-800'>English Grammar Checker:</strong> Ensure your content is error-free with advanced grammar checking.
                </li>
                <li>
                  <strong className='font-medium text-gray-800'>Tagline and Product Description Generator:</strong> Craft memorable taglines and compelling product descriptions that resonate with your audience.
                </li>
                <li>
                  <strong className='font-medium text-gray-800'>Plagiarism-Free Article Rewriting:</strong> Revise and improve articles while ensuring they remain original and plagiarism-free.
                </li>
                <li>
                  <strong className='font-medium text-gray-800'>Text Improver and Emoji Integration:</strong> Enhance your text and add emojis to make your content more engaging and expressive.
                </li>
              </ul>
            </section>
            <section className='mb-6'>
              <h2 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4'>
                Why Choose CreatifyAI?
              </h2>
              <p className='text-lg text-gray-700 leading-relaxed'>
                CreatifyAI stands out in the crowded content creation market for its versatility and ease of use. Our tool is designed to save you time, boost productivity, and help you produce high-quality content consistently. Whether you’re looking to improve your marketing campaigns, enhance your social media presence, or streamline your coding tasks, CreatifyAI has got you covered.
              </p>
            </section>
            <section>
              <h2 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4'>
                Get Started with CreatifyAI
              </h2>
              <p className='text-lg text-gray-700 leading-relaxed'>
                Ready to revolutionize your content creation process? Sign up for CreatifyAI today and discover how our AI-powered tool can transform your content strategy and drive success.
              </p>
              <p className='text-lg font-semibold text-gray-900 mt-2'>
                CreatifyAI—where creativity meets technology.
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
