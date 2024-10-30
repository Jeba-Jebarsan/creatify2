'use client';

import React from 'react';
import Navbar from "./navigation/navbar";
import WrapperA from './(marketing)/warpper';
import ContainerB from './(marketing)/containerB';
import { ArrowRight, ChevronRight, Heart, HeartCrack, HeartHandshake, UserIcon, Zap } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BorderBeam } from '@/components/ui/border-beam';
import SectionBadge from './section-badge';
import { features, perks, pricingCards, reviews } from './constants';
import { Icons } from './(marketing)';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { cn } from '@/lib/utils';
import Marquee from './marquee';
import { LampContainer } from './lamp';
import { Input } from '@/components/ui/input';
import { TextHoverEffect } from '@/components/ui/text-hover-effect'; // Adjust the path as necessary

const backur = "/sty.png"; // Ensure this path is correct and starts with a leading slash

const Home = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const toggleFAQ = (index: number) => {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    if (content && icon) {
      content.classList.toggle('hidden');
      icon.textContent = content.classList.contains('hidden') ? '+' : '-';
    }
  };

  return (
    <div className='bg-gradient-to-b from-black via-blue-950 to-black'>
      <>
        <Navbar />
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
          
          {/* Hero */}
          <WrapperA>
            <ContainerB>
              <div className='flex flex-col items-center justify-center py-20 w-full'>
                <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 bg-blue-500">
                  <span>
                    <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                  </span>
                  <span className="absolute inset-[1px] rounded-full bg-gradient-to-r from-blue-900 via-purple-600 to-pink-700 transition-colors duration-200 group-hover:from-blue-700 group-hover:via-purple-500 group-hover:to-pink-500" />
                  <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                  <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                    <Image src="/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                    Introducing Creatify AI
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </button>
                <div className='flex flex-col items-center mt-8 max-w-3xl max-auto w-11/12 md:w-full'>
                  <h1 className='text-4xl md:text-6xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-100 text-transparent'>
                    The Ultimate <span style={{ background: 'linear-gradient(to right, #1e3a8a, #9333ea, #dc2626)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI Content</span> Creation Tool
                  </h1>
                  
            <p className='text-base md:text-lg text-foreground/80 mt-6 text-center'>Transform your content creation with CreatifyAI! Our AI-powered tool simplifies generating and optimizing emails, blogs, and social media posts. Enhance your productivity with features like code generation, grammar checking, and tailored text improvements.

Start today and revolutionize your content strategy with the power of AI!</p>

<div className='flex md:flex relative items-center justify-center mt-8 md:mt-12 w-full'>
  <Link href="/dashboard" className='flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 md:gap-3 shadow-2xl shadow-foreground/40 cursor-pointer select-none'>
    <p className='text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:marker:pr-0'>
      {"✨ "} Start building now
    </p>
    <Button size="sm" className='rounded-full lg:flex border border-foreground/20 bg-gradient-to-r from-[#1e3a8a] via-[#9333ea] to-[#dc2626]'>
  Get Started
  <ArrowRight className='w-4 h-4 ml-1' />
</Button>



  </Link>
 

</div>
<div className="flex items-center justify-center mt-6 animate-fade-in">
  <div className="flex -space-x-3 hover:space-x-2 transition-all duration-500 group">
    <img 
      src="/avatar1.png" 
      alt="User avatar" 
      className="w-12 h-12 rounded-full border-2 border-blue-500/50 hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 cursor-pointer hover:z-10"
    />
    <img 
      src="/avatar2.png" 
      alt="User avatar"  
      className="w-12 h-12 rounded-full border-2 border-purple-500/50 hover:scale-125 hover:-rotate-12 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 cursor-pointer hover:z-10"
    />
    <img 
      src="/avatar3.png" 
      alt="User avatar"  
      className="w-12 h-12 rounded-full border-2 border-pink-500/50 hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-pink-500/50 cursor-pointer hover:z-10"
    />
    <img 
      src="/avatar4.png" 
      alt="User avatar"  
      className="w-12 h-12 rounded-full border-2 border-red-500/50 hover:scale-125 hover:-rotate-12 transition-all duration-300 shadow-lg hover:shadow-red-500/50 cursor-pointer hover:z-10"
    />
  </div>
  <span className="ml-4 text-base font-medium text-white">
    Join +1 million Users
  </span>
</div>

<div className='text-lg text-gray-400 mt-4 font-bold' style={{ background: 'linear-gradient(to right, #1e3a8a, #9333ea, #dc2626)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>No credit card required</div>


            </div>

              <div className="relative flex items-center justify-center py-10 md:py-20 w-full">

                  <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                    <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                                <Image
                                    src="/sty.png"
                                    alt="background"
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                    className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                                />

                                <BorderBeam size={250} duration={12} delay={9} />
                    </div>
              </div>
            
          </div></ContainerB>
       
       
      </WrapperA>
       {/* how it works */}
       <WrapperA className="flex flex-col items-center justify-center py-12 relative ">
                <ContainerB>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="The Process" />
                        <h2 className=" text-white text-3xl lg:text-4xl font-semibold mt-6">
                        Three Steps to Create Your Perfect Content
                        </h2>
                        <p className="text-muted-foreground mt-6">
                        Transform your ideas into engaging content effortlessly with just 3 simple steps.
                        </p>
                    </div>
                </ContainerB>
                <ContainerB>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
                            {perks.map((perk) => (
                                <div key={perk.title} className="  flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                                    <div className="  flex items-center justify-center">
                                        <perk.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className=" text-lg font-medium mt-4 text-white">
                                        {perk.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {perk.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ContainerB>
            </WrapperA>
            
             {/* features */}
             <div id="feature">
             <WrapperA className="flex flex-col items-center justify-center py-12 relative ">
                <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
                <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
                <ContainerB>
                    <div className="max-w-md mx-auto text-start md:text-center  from-black via-blue-950 to-black">
                        <SectionBadge title="Features" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6 text-white">
                            Discover our powerful features
                        </h2>
                        <p className="text-muted-foreground mt-6">
                        CreatifyAI provides a suite of tools to help you effortlessly create engaging content and elevate your online presence.
                        </p>
                    </div>
                </ContainerB>
                <ContainerB>
                    <div className="flex items-center justify-center mx-auto mt-8">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </ContainerB>
                <ContainerB >
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full  from-black via-blue-950 to-black">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex flex-col items-start lg:items-start px-0 md:px-0 text-white">
                                    <div className="flex items-center justify-center">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {feature.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ContainerB>
            </WrapperA>
            </div>
            {/* pricing*/}
            <div id="pricing-section">
  <WrapperA className="flex flex-col items-center justify-center py-12 relative">
    <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
    <ContainerB>
      <div className="max-w-md mx-auto text-start md:text-center">
        <SectionBadge title="Pricing" />
        <h2 className="text-3xl lg:text-4xl font-semibold mt-6 text-white">
        Unlock the Perfect Plan for Your Needs
        </h2>
        <p className="text-muted-foreground mt-6">
        Select the perfect plan and start crafting your content today
        </p>
      </div>
    </ContainerB>
    <ContainerB className="flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={cn("flex flex-col w-full border-neutral-700 ",
              card.title === "Unlimited Saas" && "border-2 border-primary"
            )}
          >
            <CardHeader className="border-b border-border">
              <span>
                {card.title}
              </span>
              <CardTitle className={cn(card.title !== "Unlimited Saas" && "text-muted-foreground")}>
                {card.price}
              </CardTitle>
              <CardDescription>
                {card.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-3">
              {card.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Zap className="w-4 h-4 fill-primary text-primary" />
                  <p>{feature}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter className="mt-auto">
              <Link
                href="/dashboard/billing"
                className={cn(
                  "w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium",
                  card.title !== "Unlimited Saas" && "!bg-foreground !text-background"
                )}
              >
                {card.buttonText}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </ContainerB>
  </WrapperA>
</div>


            {/* testimonials */}
            <WrapperA className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10 "></div>
                <ContainerB >
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Our Customers" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6 text-white ">
                            What people are saying
                        </h2>
                        <p className="text-muted-foreground mt-6  ">
                        See how CreatifyAI empowers creators of all kinds. Here's what our users are saying
                        </p>
                    </div>
                </ContainerB>
                <ContainerB>
                    <div className="py-10 md:py-20 w-full text-white">
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10 ">
                            <Marquee pauseOnHover className="[--duration:20s] select-none">
                                {firstRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                                {secondRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                        </div>
                    </div>
                </ContainerB>
            </WrapperA>
             {/* FAQ Section */}
             <WrapperA className="flex flex-col items-center justify-center py-12 relative">
                <ContainerB>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <SectionBadge title="FAQ" />
                            <h2 className="text-3xl lg:text-4xl font-semibold mt-6 text-white">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-muted-foreground mt-4">
                                Everything you need to know about Creatify AI
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                {
                                    question: "What is Creatify, and how does it help with content creation?",
                                    answer: "✨ Creatify is an AI-powered platform designed to assist with various content creation needs, including generating and enhancing emails, blogs, social media posts, and code. It uses advanced AI to streamline creative tasks, enabling users to produce high-quality content quickly and efficiently."
                                },
                                {
                                    question: "What types of content can I create with Creatify?",
                                    answer: "🎯 Creatify supports emails (drafts, rewrites, personalization), blogs (full posts, titles, ideas), social media content (Instagram captions, hashtags, post ideas, YouTube SEO), product descriptions and taglines for e-commerce, and code (snippets, explanations, debugging)."
                                },
                                {
                                    question: "How does Creatify improve existing content?",
                                    answer: "✍️ Creatify includes features to rewrite, rephrase, or enhance existing content. It adjusts for better clarity, readability, and engagement based on specific platforms, making your content polished and suitable for your audience. For social media, it adds emojis and stylistic elements to make posts more relatable."
                                },
                                {
                                    question: "What social media features does Creatify offer?",
                                    answer: "📱 Creatify provides fresh post ideas tailored to platforms like Instagram, attention-grabbing captions with relevant hashtags to increase reach, and SEO-focused titles, descriptions, and tags for YouTube videos to improve discoverability and engagement."
                                },
                                {
                                    question: "Is Creatify suitable for SEO content?",
                                    answer: "🔍 Yes, Creatify generates SEO-friendly blog titles, keywords, and descriptions following current best practices. It suggests topic ideas and keywords based on trends, helping bloggers, marketers, and businesses improve search rankings and organic reach."
                                },
                                {
                                    question: "Does Creatify support multiple languages?",
                                    answer: "🌍 Yes, Creatify supports multiple languages, allowing users to generate content for audiences in different regions and adapt it for specific cultural or linguistic needs. This feature helps businesses reach a global audience with locally relevant content."
                                },
                                {
                                    question: "How does Creatify assist with coding?",
                                    answer: "💻 Creatify provides AI-driven coding support including code generation in various languages, code explanation to break down complex code, and bug detection with suggested solutions to save time in debugging."
                                },
                                {
                                    question: "Does Creatify offer tools to improve writing?",
                                    answer: "📝 Yes, Creatify includes a grammar checker for correcting grammar, punctuation, and spelling errors. It also offers a Text Improver to enhance readability and professionalism, making it ideal for emails, blogs, and marketing content."
                                },
                                {
                                    question: "How secure is Creatify?",
                                    answer: "🔒 Creatify takes security seriously, protecting all user data and generated content through secure encryption and safe data storage practices. We maintain compliance with industry standards to ensure user information remains confidential."
                                },
                                {
                                    question: "Is there a free trial available?",
                                    answer: "🎁 Yes, Creatify offers the first 10,000 words free, allowing users to explore and test its features before committing to a subscription. After reaching the limit, users can choose from several subscription plans tailored to different content creation needs."
                                }
                            ].map((faq, index) => (
                                <Card key={index} className="border border-foreground/20 bg-background/50 backdrop-blur-sm">
                                    <CardHeader 
                                        className="cursor-pointer flex flex-row items-center justify-between"
                                        onClick={() => {
                                            // Close all other FAQs
                                            document.querySelectorAll('[id^="faq-content-"]').forEach((content, i) => {
                                                if (i !== index) {
                                                    content.classList.add('hidden');
                                                    document.getElementById(`faq-icon-${i}`)!.textContent = '+';
                                                }
                                            });
                                            // Toggle current FAQ
                                            toggleFAQ(index);
                                        }}
                                    >
                                        <CardTitle className="text-lg text-white">{faq.question}</CardTitle>
                                        <span id={`faq-icon-${index}`} className="text-2xl text-white">+</span>
                                    </CardHeader>
                                    <CardContent id={`faq-content-${index}`} className="hidden">
                                        <p className="text-muted-foreground">{faq.answer}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </ContainerB>
            </WrapperA>

             {/* newsletter */}
             <WrapperA className="flex flex-col items-center justify-center py-12 relative">
                <ContainerB>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center ">
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8 text-white">
                            From Concept to Creation, <br /> Quicker Than Ever
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                            Transform your ideas into captivating content with CreatifyAI's seamless tools and intelligent assistance
                            </p>
                            <Button variant="default" className={cn("bg-white text-black mt-6")} asChild>
                                <Link href="/dashboard">
                                    Get started for free
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <div className="text-sm text-white font-semi-bold mt-2">No credit card required</div>

                        </div>
                    </LampContainer>
                </ContainerB>
                <ContainerB className="relative z-[999999]">
                    <div className="flex items-center justify-center w-full -mt-40">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                            <div className="flex flex-col items-start gap-4 w-full">
                                <h4 className="text-xl md:text-2xl font-semibold text-white">
                                    Join our newsletter
                                </h4>
                                <p className="text-base text-muted-foreground">
                                Stay informed with the latest updates and insights on AI-driven content creation.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                                <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                                <Input
    required
    type="email"
    placeholder="Enter your email"
    className="bg-gray-100 border border-gray-300 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full p-2 rounded-md text-gray-700"
/>

                                    <Button type="submit" size="sm" variant="secondary" className="w-full md:w-max text-blue-800">
                                        Subscribe
                                    </Button>
                                </form>
                                <p className="text-xs text-muted-foreground ">
                                    By subscribing you agree with our{" "}
                                    <Link href="#">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </ContainerB>
            </WrapperA>
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
                            <Link href="https://www.facebook.com/profile.php?id=61567294546978" className="hover:text-foreground transition-all duration-300">
                                Facebook
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/integration/instagram" className="hover:text-foreground transition-all duration-300">
                                Instagram
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="https://x.com/creatifyio" className="hover:text-foreground transition-all duration-300">
                                Twitter
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="https://www.linkedin.com/company/trycreatify/?viewAsMember=true" className="hover:text-foreground transition-all duration-300">
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
    <div className="h-[18rem] lg:h-[18rem] flex items-center justify-center">
        <TextHoverEffect text="CREATIFY" />
    </div>
</footer>



      </section>
    </>
    </div>
  );
}

export default Home;

