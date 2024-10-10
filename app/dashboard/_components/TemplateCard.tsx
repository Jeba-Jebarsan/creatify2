'use client';
import React, { useState } from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

function TemplateCard({ icon, name, desc, category, slug }: TEMPLATE) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleUseTemplate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/dashboard/content/' + slug);
  };

  const tooltipContent = {
    email: [
      'Generates well-organized emails for professional and personal use. 📧',
      'Customizable templates for various situations (e.g., job applications, newsletters). 📝',
      'Includes a subject line generator and context-based greetings/closings. 🗂️',
      'Enhances email clarity, tone, and style (formal, casual, persuasive). 🎯',
      'Highlights areas for improvement and allows comparison of original and revised versions. 🔍',
    ],
    blog: [
      'Crafts catchy titles that attract readers and enhance SEO with relevant keywords. 📈',
      'Analyzes competitor titles for inspiration and tests engagement metrics pre-publishing. 📊',
      'Creates engaging articles based on outlines and maintains reader interest with informative content. 🖊️',
      'Suggests relevant images to complement text and provides readability scores for accessibility. 🖼️',
      'Develops unique themes tailored to your niche, incorporating audience feedback and trending topics for timely content. 🌟',
    ],
    youtube: [
      'Craft SEO-optimized titles to improve searchability and attract clicks. 🎥',
      'Create engaging descriptions that summarize video content and include keywords for better visibility. 📝',
      'Add calls-to-action in descriptions to encourage viewer engagement and interaction. 📣',
      'Generate relevant tags that help YouTube categorize your content and enhance discoverability. 🔖',
      'Use insights from trending topics to inform title and tag choices, leveraging current viewer interests. 📊',
    ],
    article: [
      'Rephrasing: 🔄 Changes wording and structure while maintaining the original message.',
      'Plagiarism Check: 🔍 Identifies similarities with online content to ensure uniqueness.',
      'Context Retention: 📌 Keeps the original intent and meaning of the article intact.',
      'Enhanced Clarity: ✨ Boosts readability for a more engaging experience.',
      'User-Friendly: 🖥️ Offers a simple interface for quick article rewriting without needing extensive skills.',
    ],
    text: [
      'Text Improver ✍️: Enhances clarity and readability by refining content for a more engaging and concise presentation.',
      'Add Emojis to Text 🎉: Boosts engagement by incorporating relevant emojis, making content visually appealing and expressive.',
      'English Grammar Check ✅: Reviews and corrects grammatical errors to ensure professionalism and accuracy in writing.',
      'Enhanced Communication 📢: These features collectively improve communication effectiveness, making your messages clearer and more impactful.',
      'User-Friendly Experience 🌟: Designed for ease of use, these tools help users quickly enhance their writing without extensive editing knowledge.',
    ],
    instagram: [
      'Content Generation: 📝 Create engaging posts tailored to your suggestions for a consistent brand voice.',
      'Hashtag Optimization: #️⃣ Generate effective hashtags to boost visibility and attract followers.',
      'Creative Concepts: 💡 Get unique ideas for posts or reels to keep your content fresh and trendy.',
      'Audience Engagement: 🤝 Improve interaction with your audience and build a thriving community.',
      'Time Efficiency: ⏱️ Streamline content creation for quick, high-quality posts without the hassle.',
    ],
    coding: [
      'Code Generation: 🖥️ Create custom code snippets that meet your specific needs effortlessly.',
      'Code Explanation: 📖 Receive detailed, step-by-step explanations of your code snippets for better understanding.',
      'Bug Detection: 🐞 Analyze your code to identify and debug potential issues effectively.',
      'Learning Support: 📚 Enhance your coding skills by understanding the logic behind generated code.',
      'Efficiency Boost: ⚡ Save time on coding tasks, allowing you to focus on higher-level programming challenges.',
    ],
    branding: [
      'Catchphrase Creation: 🎤 Generate engaging and memorable taglines that resonate with your target audience.',
      'Brand Identity Enhancement: 🌟 Strengthen your brand\'s identity by crafting unique catchphrases that reflect your values.',
      'Market Differentiation: 🚀 Stand out in a crowded marketplace with creative taglines that set you apart from competitors.',
      'Emotional Connection: ❤️ Build a connection with consumers through relatable and impactful phrases that evoke emotions.',
      'Versatile Use: 📣 Utilize generated taglines across various platforms and marketing materials for consistent branding.'
    ],
    'e-tail': [
      'Clear Details: ✍️ Provide concise information about product features and benefits.',
      'Persuasive Language: 💬 Use engaging wording to encourage purchases.',
      'SEO-Friendly: 🔍 Include relevant keywords to improve search visibility.',
      'Audience Targeting: 🎯 Tailor descriptions to meet the preferences of your target customers.',
      'Brand Consistency: 🛍️ Maintain a uniform tone to strengthen brand identity.',
    ],
  };

  return (
    <motion.div
      className={`relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ${isMobile ? 'w-full' : 'cursor-pointer'}`}
      whileHover={isMobile ? {} : {
        scale: 1.05,
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div className={`p-4 ${isMobile ? 'space-y-4' : 'p-6'}`}>
        <motion.div
          className='flex items-center mb-4'
          animate={isMobile ? {} : isHovered ? { y: -5 } : { y: 0 }}
        >
          <motion.div
            className='rounded-full p-2 mr-4 bg-gradient-to-br from-blue-100 to-purple-100'
            whileHover={isMobile ? {} : { rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={icon} alt={name} width={40} height={40} className='object-contain' />
          </motion.div>
          <h2 className='font-bold text-xl md:text-2xl text-gray-800'>{name}</h2>
        </motion.div>
        <motion.p
          className='text-gray-600 text-sm mb-5 leading-relaxed'
          animate={isMobile ? {} : isHovered ? { opacity: 1 } : { opacity: 0.8 }}
        >
          {desc}
        </motion.p>
        <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'justify-between items-center'}`}>
          <div className="relative">
            <motion.span
              className='text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1.5 rounded-full cursor-pointer relative'
              whileHover={isMobile ? {} : { scale: 1.05, backgroundColor: "#3B82F6", color: "#FFFFFF" }}
              onMouseEnter={() => !isMobile && setShowTooltip(true)}
              onMouseLeave={() => !isMobile && setShowTooltip(false)}
              onClick={() => isMobile && setShowTooltip(!showTooltip)}
            >
              {category}
            </motion.span>
          </div>
          <motion.button
            className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium py-2.5 px-5 rounded-full transition-all duration-300 shadow-md w-full md:w-auto'
            whileHover={isMobile ? {} : { scale: 1.05, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleUseTemplate}
          >
            <motion.span
              className='flex items-center justify-center'
              initial={false}
              animate={isMobile ? {} : isHovered ? { x: 5 } : { x: 0 }}
            >
              Use Template
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={false}
                animate={isMobile ? {} : isHovered ? { x: 5, opacity: 1 } : { x: -5, opacity: 0 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.span>
          </motion.button>
        </div>
        <AnimatePresence>
          {showTooltip && tooltipContent[category.toLowerCase() as keyof typeof tooltipContent] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mt-4 text-sm text-gray-700 bg-gray-100 rounded-lg p-4 shadow-lg"
            >
              <motion.ul
                className="list-disc pl-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {tooltipContent[category.toLowerCase() as keyof typeof tooltipContent].map((point, index) => (
                  <motion.li
                    key={index}
                    className="mb-1"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default TemplateCard;