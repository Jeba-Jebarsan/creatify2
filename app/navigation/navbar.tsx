"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { buttonVariants } from '@/components/ui/button';
import classNames from "classnames";
import { Menu, ChevronDown, X, LogIn, UserPlus, LogOut } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { UserButton, useUser, SignOutButton } from '@clerk/nextjs';
import { Icons } from '../(marketing)';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const router = useRouter();
    const { isSignedIn, user } = useUser();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleFeatures = () => {
        setFeaturesOpen(!featuresOpen);
    };

    const features = [
        { name: "Write Email", icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png", path: "/dashboard/content/write-email" },
        { name: "Rewrite Your Email", icon: "https://cdn-icons-png.flaticon.com/128/15047/15047587.png",path:"/dashboard/content/rewrite-your-email" },
        { name: "Blog Title", icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",path:"/dashboard/content/generate-blog-title" },
        { name: "Blog Content", icon: "https://cdn-icons-png.flaticon.com/128/10026/10026257.png",path:"/dashboard/content/blog-content" },
        { name: "Blog Topic Ideas", icon: "https://cdn-icons-png.flaticon.com/128/11497/11497893.png",path:"/dashboard/content/blog-topic-ideas" },
        { name: "YouTube SEO Titles", icon: "https://cdn-icons-png.flaticon.com/128/5312/5312098.png",path:"/dashboard/content/youtube-seo-titles" },
        { name: "YouTube Description", icon: "https://cdn-icons-png.flaticon.com/128/3128/3128307.png",path:"/dashboard/content/youtube-description" },
        { name: "YouTube Tags", icon: "https://cdn-icons-png.flaticon.com/128/10884/10884882.png",path:"/dashboard/content/youtube-tags" },
        { name: "Rewrite Article", icon: "https://cdn-icons-png.flaticon.com/128/17380/17380141.png",path:"/dashboard/content/rewrite-article" },
        { name: "Text Improver", icon: "https://cdn-icons-png.flaticon.com/128/5105/5105486.png",path:"/dashboard/content/text-improver" },
        { name: "Add Emojis to Text", icon: "https://cdn-icons-png.flaticon.com/128/4160/4160724.png",path:"/dashboard/content/add-emojis-to-text" },
        { name: "Instagram Post Generator", icon: "https://cdn-icons-png.flaticon.com/128/5721/5721461.png",path:"/dashboard/content/instagram-post-generator" },
        { name: "Instagram Hashtags", icon: "https://cdn-icons-png.flaticon.com/128/5109/5109610.png",path:"/dashboard/content/instagram-hash-tag-generator" },
        { name: "Instagram Post Idea", icon: "https://cdn-icons-png.flaticon.com/128/11820/11820224.png",path:"/dashboard/content/instagram-post-reel-idea" },
        { name: "English Grammar Check", icon: "https://cdn-icons-png.flaticon.com/128/4806/4806151.png" ,path:"/dashboard/content/english-grammar-check"},
        { name: "Write Code", icon: "https://cdn-icons-png.flaticon.com/128/4997/4997543.png",path:"/dashboard/content/write-code" },
        { name: "Explain Code", icon: "https://cdn-icons-png.flaticon.com/128/10478/10478244.png",path:"/dashboard/content/explain-code" },
        { name: "Code Bug Detector", icon: "https://cdn-icons-png.flaticon.com/128/8297/8297137.png",path:"/dashboard/content/code-bug-detector" },
        { name: "Tagline Generator", icon: "https://cdn-icons-png.flaticon.com/128/13966/13966755.png",path:"/dashboard/content/tagline-generator" },
        { name: "Product Description", icon: "https://cdn-icons-png.flaticon.com/128/12578/12578725.png",path:"/dashboard/content/product-description" }
    ];

    const NavItems = () => (
        <ul className={`${isMobile ? 'flex-col p-4 space-y-4' : 'flex'} items-center justify-center gap-8`}>
            <li className='text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:via-purple-600 hover:to-red-600 d/80 text-base font-medium'>
                <Link href="#pricing-section" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            </li>
            <li className='text-white hover:text-gray-300 d/80 text-base font-medium relative'>
                <button 
                    onClick={isMobile ? toggleFeatures : undefined}
                    onMouseEnter={!isMobile ? () => setFeaturesOpen(true) : undefined}
                    onMouseLeave={!isMobile ? () => setFeaturesOpen(false) : undefined}
                    className="flex items-center"
                    style={{ color: featuresOpen ? 'transparent' : 'white', background: featuresOpen ? 'linear-gradient(to right, #1e3a8a, #9333ea, #dc2626)' : 'transparent', WebkitBackgroundClip: featuresOpen ? 'text' : 'none', WebkitTextFillColor: featuresOpen ? 'transparent' : 'white' }}
                >
                    Features <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {featuresOpen && (
                    <div 
                        className={`${isMobile ? 'relative mt-2' : 'absolute left-0 mt-2'} w-full md:w-[600px] bg-white rounded-lg shadow-2xl p-6 z-50 border border-gray-200 backdrop-blur-md ${isMobile ? 'max-h-[70vh] overflow-y-auto' : ''}`}
                        onMouseEnter={!isMobile ? () => setFeaturesOpen(true) : undefined}
                        onMouseLeave={!isMobile ? () => setFeaturesOpen(false) : undefined}
                    >
                        <ul className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-4'} gap-4`}>
                            {features.map((feature, index) => (
                                <li key={index} className="text-sm text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-2 transition-all duration-200 transform hover:scale-105">
                                    <button 
                                        onClick={() => {
                                            if (feature.path) {
                                                router.push(feature.path);
                                                if (isMobile) {
                                                    setIsMenuOpen(false);
                                                    setFeaturesOpen(false);
                                                }
                                            }
                                        }}
                                        className="flex items-center w-full h-full"
                                    >
                                        <Image src={feature.icon} alt={feature.name} width={20} height={20} className="mr-3" />
                                        <span className="font-medium">{feature.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </li>
            <li className='text-white d/80 text-base font-medium'>
                <Link 
                    href="/AboutUs" 
                    onClick={() => setIsMenuOpen(false)}
                    style={{ color: 'white', background: 'transparent', WebkitBackgroundClip: 'none', WebkitTextFillColor: 'white' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'transparent';
                        e.currentTarget.style.background = 'linear-gradient(to right, #1e3a8a, #9333ea, #dc2626)';
                        e.currentTarget.style.webkitBackgroundClip = 'text';
                        e.currentTarget.style.webkitTextFillColor = 'transparent';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.webkitBackgroundClip = 'none';
                        e.currentTarget.style.webkitTextFillColor = 'white';
                    }}
                >
                    About Us
                </Link>
            </li>
            <li className='text-white d/80 text-base font-medium'>
                <Link 
                    href="/BlogPage" 
                    onClick={() => setIsMenuOpen(false)}
                    style={{ color: 'white', background: 'transparent', WebkitBackgroundClip: 'none', WebkitTextFillColor: 'white' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'transparent';
                        e.currentTarget.style.background = 'linear-gradient(to right, #1e3a8a, #9333ea, #dc2626)';
                        e.currentTarget.style.webkitBackgroundClip = 'text';
                        e.currentTarget.style.webkitTextFillColor = 'transparent';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.webkitBackgroundClip = 'none';
                        e.currentTarget.style.webkitTextFillColor = 'white';
                    }}
                >
                    Blog
                </Link>
            </li>
        </ul>
    );

    return (
        <header className='px-4 h-16 sticky top-0 inset-x-0 w-full bg-blue-900/20 backdrop-blur-lg border-b border-border z-50'>
            <div className='flex items-center justify-between h-full mx-auto md:max-w-screen-xl'>
                <div className='flex items-start'>
                    <Link href="/" className='flex items-center gap-2'>
                        <Image src="/logo.svg" alt="logo" width={70} height={70} />
                        <span className='text-xl font-bold' style={{ background: 'linear-gradient(to right, #1e3a8a, #9333ea, #dc2626)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Creatify</span>
                    </Link>
                </div>
                {isMobile ? (
                    <div className="flex items-center">
                        {isSignedIn && <UserButton />}
                        <button onClick={toggleMenu} className="text-white ml-4 p-2 rounded-full hover:bg-blue-800 transition-colors duration-200">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                ) : (
                    <nav className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                        <NavItems />
                    </nav>
                )}
                {!isMobile && (
                    <div className='flex items-center gap-4'>
                        {isSignedIn ? (
                            <>
                                <UserButton/>
                                <SignOutButton>
                                    <button className={classNames(
                                        buttonVariants({ size: "sm", variant: "ghost" }),
                                        "relative inline-block text-white transition-shadow duration-300 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/50"
                                    )}>
                                        Log out
                                    </button>
                                </SignOutButton>
                            </>
                        ) : (
                            <>
                                <Link 
                                    href="/sign-in"
                                    className="flex items-center gap-1 px-3 py-1.5 text-sm text-white bg-blue-700 rounded-md hover:bg-blue-600 transition-colors duration-200"
                                >
                                    <LogIn size={14} />
                                    Login
                                </Link>
                                <Link
                                    href="/sign-up"
                                    className="flex items-center gap-1 px-3 py-1.5 text-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-md hover:from-purple-500 hover:to-pink-500 transition-colors duration-200"
                                >
                                    <UserPlus size={14} />
                                    Start for free
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </div>
            {isMobile && isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gradient-to-b from-black to-gray-900 backdrop-blur-lg transition-all duration-300 ease-in-out shadow-2xl">
                    <div className="p-8 space-y-8">
                        <NavItems />
                        {isSignedIn ? (
                            <div className="flex flex-col space-y-4">
                                <SignOutButton>
                                    <button className="w-full py-4 text-center text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg">
                                        <LogOut size={20} className="mr-3" />
                                        Log out
                                    </button>
                                </SignOutButton>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-6">
                                <Link 
                                    href="/sign-in"
                                    className="w-full py-4 text-center text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <LogIn size={20} className="mr-3" />
                                    Login
                                </Link>
                                <Link
                                    href="/sign-up"
                                    className="w-full py-4 text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <UserPlus size={20} className="mr-3" />
                                    Start for free
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
            
            
        </header>
    );
};

export default Navbar;
