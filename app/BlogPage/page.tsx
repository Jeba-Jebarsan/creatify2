import React from 'react';
import { Navbar } from '../(marketing)';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../(marketing)';
import { HeartHandshake } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-indigo-900 min-h-screen">
      <Navbar />
      <div className='text-white py-12 px-4 lg:px-8'>
        <div className='container mx-auto'>
          <article className='bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 lg:p-16 border border-white/20 relative overflow-hidden'>
            {/* Animated Glowing Border Effect */}
            <div className='absolute inset-0 border-4 border-blue-500 rounded-2xl blur animate-pulse'></div>
            
            <header className='text-center mb-12 relative z-10'>
              <h1 className='text-5xl font-extrabold text-white leading-tight'>
                Introducing CreatifyAI: Your Ultimate Content Creation Companion
              </h1>
            </header>

            {/* Headline with subtle animation */}
            <section className='text-center mb-12'>
              <h2 className='text-3xl font-semibold text-white animate-fade-in-up'>
                Revolutionize Your Content Creation Today
              </h2>
            </section>

            <section className='mb-10'>
              <p className='text-xl text-white leading-relaxed'>
                In today's fast-paced digital world, creating high-quality content efficiently is crucial for success. Whether you're a marketer, blogger, or developer, managing and generating content can be a daunting task. That's where CreatifyAI steps in—your ultimate AI-powered tool designed to streamline and enhance your content creation process.
              </p>
            </section>

            <section className='mb-10'>
              <h2 className='text-4xl font-semibold text-white mb-6'>
                What is CreatifyAI?
              </h2>
              <p className='text-xl text-white leading-relaxed'>
                CreatifyAI is a state-of-the-art AI content creation tool that provides an array of features to simplify and elevate your content strategy. From generating compelling blog posts to crafting engaging Instagram captions, our tool is designed to meet diverse content needs with precision and creativity.
              </p>
            </section>

            <section className='mb-10'>
              <h2 className='text-4xl font-semibold text-white mb-6'>
                Key Features of CreatifyAI
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {[
                  { title: 'Generate and Rewrite Emails', description: 'Create professional emails effortlessly or refine existing ones to ensure clarity and impact.' },
                  { title: 'Craft Blog Titles and Content', description: 'Generate captivating blog titles and detailed content to keep your audience engaged and informed.' },
                  { title: 'Blog Topic Ideas', description: 'Overcome writer\'s block with fresh and relevant blog topic suggestions.' },
                  { title: 'Instagram Content', description: 'Generate engaging Instagram posts, find the perfect hashtags, and brainstorm post and reel ideas to boost your social media presence.' },
                  { title: 'Code Generation and Debugging', description: 'Write and debug code with ease. CreatifyAI helps you generate code snippets, detect bugs, and explain code functionality.' },
                  { title: 'YouTube Optimization', description: 'Enhance your YouTube content with SEO-friendly titles, descriptions, and tags to improve visibility and reach.' },
                  { title: 'English Grammar Checker', description: 'Ensure your content is error-free with advanced grammar checking.' },
                  { title: 'Tagline and Product Description Generator', description: 'Craft memorable taglines and compelling product descriptions that resonate with your audience.' },
                  { title: 'Plagiarism-Free Article Rewriting', description: 'Revise and improve articles while ensuring they remain original and plagiarism-free.' },
                  { title: 'Text Improver and Emoji Integration', description: 'Enhance your text and add emojis to make your content more engaging and expressive.' },
                ].map((feature, index) => (
                  <div key={index} className='bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300'>
                    <h3 className='text-xl font-semibold text-white mb-2'>{feature.title}</h3>
                    <p className='text-white'>{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className='mb-10'>
              <h2 className='text-4xl font-semibold text-white mb-6'>
                Why Choose CreatifyAI?
              </h2>
              <p className='text-xl text-white leading-relaxed'>
                CreatifyAI stands out in the crowded content creation market for its versatility and ease of use. Our tool is designed to save you time, boost productivity, and help you produce high-quality content consistently. Whether you're looking to improve your marketing campaigns, enhance your social media presence, or streamline your coding tasks, CreatifyAI has got you covered.
              </p>
            </section>

            <section className='text-center'>
              <h2 className='text-4xl font-semibold text-white mb-6'>
                Get Started with CreatifyAI
              </h2>
              <p className='text-xl text-white leading-relaxed mb-8'>
                Ready to revolutionize your content creation process? Sign up for CreatifyAI today and discover how our AI-powered tool can transform your content strategy and drive success.
              </p>
              <p className='text-2xl font-bold text-white mt-4'>
                CreatifyAI—where creativity meets technology.
              </p>
              <Link href="/dashboard" className='inline-block mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full text-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>
                Start Your Journey
              </Link>
            </section>
          </article>
        </div>
      </div>

      <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
        <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
        <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

        <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
            <div className="flex flex-col items-start justify-start md:max-w-[200px]">
            <Link href="/" className='flex items-center gap-2'>
          <Image src="/logo.svg" alt="logo" width={100} height={90} />
        </Link>
                <p className="text-muted-foreground mt-4 text-sm text-start">
                Craft stunning content effortlessly with CreatifyAI
                </p>
                <span className="mt-4 text-neutral-200 text-sm flex items-center">
                Made with ❤️ around the 🌍
                    <HeartHandshake className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
                </span>
            </div>

            <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className="">
                        <h3 className="text-base font-medium text-white">
                            Product
                        </h3>
                        <ul className="mt-4 text-sm text-muted-foreground">
                            <li className="mt-2">
                                <Link href="#" className="hover:text-foreground transition-all duration-300">
                                    Overview
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="#feature" className="hover:text-foreground transition-all duration-300">
                                    Features
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="#pricing-section" className="hover:text-foreground transition-all duration-300">
                                    Pricing
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/Testimonials" className="hover:text-foreground transition-all duration-300">
                                    Testimonials
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0 flex flex-col">
                        <h3 className="text-base font-medium text-white">
                            Integrations
                        </h3>
                        <ul className="mt-4 text-sm text-muted-foreground">
                            <li className="mt-2">
                                <Link href="/integration/facebook" className="hover:text-foreground transition-all duration-300">
                                    Facebook
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/integration/instagram" className="hover:text-foreground transition-all duration-300">
                                    Instagram
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/integration/twitter" className="hover:text-foreground transition-all duration-300">
                                    Twitter
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/integration/linkedin" className="hover:text-foreground transition-all duration-300">
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className="">
                        <h3 className="text-base font-medium text-white">
                            Resources
                        </h3>
                        <ul className="mt-4 text-sm text-muted-foreground">
                            <li className="mt-2">
                                <Link href="BlogPage" className="hover:text-foreground transition-all duration-300">
                                    Blog
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/CaseStudy" className="hover:text-foreground transition-all duration-300">
                                    Case Studies
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/Support" className="hover:text-foreground transition-all duration-300">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0 flex flex-col">
                        <h3 className="text-base font-medium text-white">
                            Company
                        </h3>
                        <ul className="mt-4 text-sm text-muted-foreground">
                            <li className="mt-2">
                                <Link href="/AboutUs" className="hover:text-foreground transition-all duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/PrivacyPolicy" className="hover:text-foreground transition-all duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/Terms&Conditions" className="hover:text-foreground transition-all duration-300">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
            <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                &copy; {new Date().getFullYear()} Creatify AI INC. All rights reserved.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
