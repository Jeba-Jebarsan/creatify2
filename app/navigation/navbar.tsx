import Link from 'next/link';
import React from 'react';
import Icons from '../global/icons';
import { buttonVariants } from '@/components/ui/button';
import { currentUser } from '@clerk/nextjs/server';
import {UserButton} from "@clerk/nextjs"

const Navbar = async() => {
    const user = await currentUser();

    return (
        <header className='px-4 h-14 sticky top-0 inset-x-0 w-full bg-blue-900/20 backdrop-blur-lg border-b border-border z-50'>
            <div className='flex items-center justify-between h-full mx-auto md:max-w-screen-xl'>
                <div className='flex items-start'>
                    <Link href="/" className='flex items-center gap-2'>
                        <Icons.logo />
                        <span className='text-white text-lg font-medium'>Creatify</span>
                    </Link>
                </div>
                <nav className='hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                    <ul className='flex items-center justify-center gap-8'>
                        <li className='text-white hover:text-gray-300 d/80 text-sm'>
                            <Link href="#pricing-section">Pricing</Link>
                        </li>
                        <li className='text-white hover:text-gray-300 d/80 text-sm'>
                            <Link href="#feature">Features</Link>
                        </li>
                        <li className='text-white hover:text-gray-300 d/80 text-sm'>
                            <Link href="/AboutUs">About Us</Link>
                        </li>
                        <li className='text-white hover:text-gray-300 d/80 text-sm'>
                            <Link href="BlogPage">Blog</Link>
                        </li>
                    </ul>
                </nav>
                <div className='flex items-center gap-4'>
                    {user ? (
                        <UserButton/>
                    ) : (
                        <>
                            <Link href="/sign-in" className={`${buttonVariants({ size: "sm", variant: "ghost" })} text-white`}>
                                Login
                            </Link>
                            <Link
                                href="/sign-up"
                                className={`${buttonVariants({ size: "sm", className: "hidden md:flex" })} relative rounded-full bg-gradient-to-r from-blue-900 via-purple-600 to-pink-700 text-white transition-colors duration-200 group-hover:from-blue-700 group-hover:via-purple-500 group-hover:to-pink-500`}
                                >
                                Start for free
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
