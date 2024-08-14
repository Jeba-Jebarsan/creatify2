import React from 'react';
import { Navbar } from '../(marketing)';

const CaseStudyPage = () => {
  const caseStudies = [
    {
      title: 'Empowering Digital Marketing with AI-Powered Content',
      overview: 'A leading digital marketing agency sought to streamline its content creation process to deliver more timely and relevant campaigns.',
      challenge: 'The agency faced challenges in generating diverse content ideas quickly and maintaining consistency across multiple platforms.',
      solution: 'CreatifyAI provided a comprehensive suite of tools for generating blog titles, content ideas, social media posts, and email campaigns, significantly reducing the time spent on content creation.',
      results: [
        'Increased Efficiency: Content creation time reduced by 40%.',
        'Consistency: Ensured uniform messaging across all platforms.',
        'Improved ROI: Marketing campaigns saw a 30% increase in engagement rates.',
      ],
      testimonial: 'CreatifyAI has transformed how we approach content creation, allowing us to focus more on strategy and less on production. — Digital Marketing Director',
    },
    {
      title: 'Boosting E-commerce Sales with Engaging Content',
      overview: 'An e-commerce platform needed to create compelling product descriptions and promotional content to enhance its online presence.',
      challenge: 'The company struggled with producing high-quality, SEO-friendly content that could attract and convert customers.',
      solution: 'CreatifyAI’s features for generating product descriptions and SEO-friendly content allowed the company to improve its search rankings and better engage with customers.',
      results: [
        'SEO Improvement: Organic traffic increased by 25%.',
        'Conversion Rate: Product page conversion rates improved by 15%.',
        'Content Output: The company doubled its content output without increasing staff.',
      ],
      testimonial: 'Thanks to CreatifyAI, our content is now not only high-quality but also optimized for search engines, leading to noticeable improvements in our sales. — E-commerce Manager',
    },
    {
      title: 'Elevating Content Creators with AI Assistance',
      overview: 'A content creator sought to enhance their content quality and productivity to grow their online presence.',
      challenge: 'The creator faced difficulties in consistently producing engaging content across various platforms.',
      solution: 'CreatifyAI offered tools for generating ideas, improving grammar, and crafting SEO titles and descriptions, enabling the creator to maintain a steady stream of high-quality content.',
      results: [
        'Productivity Boost: Content creation time cut by 50%.',
        'Audience Growth: Social media following grew by 20% in three months.',
        'Content Quality: Increased engagement with more polished, professional content.',
      ],
      testimonial: 'CreatifyAI is like having a personal assistant that helps me stay ahead in the content game. It\'s been a game-changer for my growth. — Content Creator',
    },
  ];

  return (
    <div className='bg-gradient-to-r bg-blue-950 text-white min-h-screen py-8 px-4 lg:px-8'>
      <Navbar />
      
      <h1 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '20px' }}>Case Studies</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Real Success Stories with CreatifyAI</h2>
        <p>Discover how CreatifyAI has helped businesses and individuals transform their content creation process. Explore detailed case studies that showcase our tool’s impact across various industries and use cases.</p>
      </section>

      {caseStudies.map((caseStudy, index) => (
        <section key={index} style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', color: '#333' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>{caseStudy.title}</h3>
          <p><strong>Overview:</strong> {caseStudy.overview}</p>
          <p><strong>Challenge:</strong> {caseStudy.challenge}</p>
          <p><strong>Solution:</strong> {caseStudy.solution}</p>
          <ul>
            {caseStudy.results.map((result, i) => (
              <li key={i} style={{ marginBottom: '5px' }}>{result}</li>
            ))}
          </ul>
          <blockquote style={{ fontStyle: 'italic', marginTop: '10px' }}>
            {caseStudy.testimonial}
          </blockquote>
        </section>
      ))}

      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Ready to Write Your Success Story?</h2>
        <p>Join the ranks of satisfied CreatifyAI users who have transformed their content creation process. Start your free trial today and see the difference AI can make.</p>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <a
            href="/dashboard"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Get Started
          </a>
        </button>
      </section>

      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Have Questions? Let’s Talk!</h2>
        <p>We’re here to help you achieve your content goals. Reach out to us for more information or to discuss how CreatifyAI can benefit your business.</p>
        <p>Email: creatifyio@gmail.com</p>
        <p>Phone: +94 70 794 0599</p>
        

      </section>
    </div>
  );
};

export default CaseStudyPage;
