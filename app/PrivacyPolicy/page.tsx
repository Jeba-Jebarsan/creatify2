import React from 'react';
import { Navbar } from '../(marketing)';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Navbar /> {/* Navbar component added here */}

      <div className='bg-gradient-to-r bg-blue-950 text-white min-h-screen py-8 px-4 lg:px-8'>
        <h1 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '20px' }}>Privacy Policy</h1>

        <p style={{ textAlign: 'center', fontSize: '18px', fontStyle: 'italic' }}>Effective Date: August 12, 2024</p>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <p><strong>CreatifyAI</strong> We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our services.</p>
          </section>
        </div>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>1. Information We Collect</h2>
            <p><strong>Personal Information:</strong> When you sign up for <strong>CreatifyAI</strong>, we collect personal information such as your name, email address, and any other information you voluntarily provide.</p>
            <p><strong>Usage Data:</strong> We collect data on how you use our services, including your interactions with our platform, the content you create or access, and other usage statistics.</p>
            <p><strong>Technical Data:</strong> This includes your IP address, browser type, operating system, and other technical information necessary for providing and improving our services.</p>
          </section>
        </div>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>2. How We Use Your Information</h2>
            <p><strong>Service Provision:</strong> We use your personal information to provide, maintain, and improve our services, and to communicate with you about updates, offers, and other information related to <strong>CreatifyAI</strong>.</p>
            <p><strong>Personalization:</strong> We may use your information to personalize your experience on our platform and to provide you with content that is relevant to your interests.</p>
            <p><strong>Analytics:</strong> We use usage data and technical data to analyze trends, monitor the effectiveness of our services, and make improvements.</p>
            <p><strong>Compliance:</strong> We may use your information to comply with legal obligations, respond to legal requests, and enforce our terms of service.</p>
          </section>
        </div>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>3. How We Share Your Information</h2>
            <p><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our platform and providing our services, subject to strict confidentiality agreements.</p>
            <p><strong>Legal Requirements:</strong> We may disclose your information if required by law, to respond to legal requests, or to protect our rights, property, or safety, or that of others.</p>
            <p><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our business, your information may be transferred as part of that transaction.</p>
          </section>
        </div>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>4. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>
        </div>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>5. Your Choices</h2>
            <p><strong>Access and Update:</strong> You may access and update your personal information through your account settings or by contacting us directly.</p>
            <p><strong>Opt-Out:</strong> You may opt out of receiving marketing communications from us by following the instructions in those communications or by contacting us directly.</p>
            <p><strong>Data Deletion:</strong> You may request the deletion of your personal information by contacting us. We will process such requests in accordance with applicable laws.</p>
          </section>
        </div>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>6. Cookies and Tracking Technologies</h2>
            <p>We use cookies and other tracking technologies to enhance your experience on our platform, analyze usage, and improve our services. You can control cookies through your browser settings.</p>
          </section>
        </div>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>7. Children's Privacy</h2>
            <p><strong>CreatifyAI</strong> does not knowingly collect personal information from children under the age of 13. If we become aware that we have collected such information, we will take steps to delete it.</p>
          </section>
        </div>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the effective date. Your continued use of our services after any changes constitutes your acceptance of the updated policy.</p>
          </section>
        </div>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>9. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
            <p><strong>CreatifyAI</strong></p>
            <p>Email: creatifyio@gmail.com</p>
            <p>Contact: +94 70 794 0599</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
