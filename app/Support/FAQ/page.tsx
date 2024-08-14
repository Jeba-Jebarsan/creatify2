import { Navbar } from '@/app/(marketing)';
import React from 'react';

const FAQPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-gradient-to-r from-blue-900 to-blue-600 text-white min-h-screen py-8 px-4 lg:px-8'>
        <h1 className='text-center text-4xl font-bold mb-8'>Frequently Asked Questions (FAQ)</h1>

        <div className='bg-white text-black p-6 rounded-lg shadow-lg'>
          <section>
            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>1. What is CreatifyAI?</h2>
              <p className='text-lg'>
                <strong>CreatifyAI</strong> is an advanced AI-powered tool designed to simplify and enhance content creation. It provides features for generating and rewriting emails, creating blog titles and content, generating Instagram posts and hashtags, code generation and debugging, YouTube SEO titles and descriptions, grammar checking, and more.
              </p>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>2. How do I sign up for CreatifyAI?</h2>
              <p className='text-lg'>
                To sign up, visit our <a href='#' className='text-blue-500 hover:underline'>registration page</a> and fill out the required information. You’ll need to provide your email address and create a password. Once you’ve completed the registration, you’ll receive a confirmation email to verify your account.
              </p>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>3. How do I reset my password?</h2>
              <p className='text-lg'>
                If you’ve forgotten your password, go to the <a href='#' className='text-blue-500 hover:underline'>password reset page</a>. Enter your email address, and we’ll send you instructions to reset your password.
              </p>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>4. How do I update my account information?</h2>
              <p className='text-lg'>
                To update your account information, log in to your account and navigate to the account settings page. From there, you can update your personal details, email address, and password.
              </p>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>5. What payment methods do you accept?</h2>
              <p className='text-lg'>
                We accept various payment methods, including credit and debit cards. You can view the available payment options during the checkout process.
              </p>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>6. How can I cancel my subscription?</h2>
              <p className='text-lg'>
                To cancel your subscription, go to the <a href='#' className='text-blue-500 hover:underline'>subscription management page</a> in your account settings. Follow the instructions to cancel your subscription before the next billing cycle to avoid additional charges.
              </p>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>7. What is your refund policy?</h2>
              <p className='text-lg'>
                Payments are generally non-refundable. However, if you experience issues with our services or believe you are entitled to a refund based on our refund policy, please contact us at <a href='mailto:support@creatifyai.com' className='text-blue-500 hover:underline'>support@creatifyai.com</a> for assistance.
              </p>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>8. How do I contact support?</h2>
              <p className='text-lg'>
                You can contact our support team via email at <a href='mailto:support@creatifyai.com' className='text-blue-500 hover:underline'>support@creatifyai.com</a>, use our <a href='#' className='text-blue-500 hover:underline'>contact form</a>, or start a live chat session on our website for immediate assistance.
              </p>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>9. How is my data protected?</h2>
              <p className='text-lg'>
                We use industry-standard security measures to protect your data. For more information, please review our <a href='#' className='text-blue-500 hover:underline'>Privacy Policy</a>, which outlines how we collect, use, and protect your personal information.
              </p>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>10. Can I use CreatifyAI on mobile devices?</h2>
              <p className='text-lg'>
                Yes, <strong>CreatifyAI</strong> is accessible via web browsers on mobile devices. For the best experience, we recommend using a modern browser and a stable internet connection.
              </p>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>11. How can I provide feedback or suggest new features?</h2>
              <p className='text-lg'>
                We welcome your feedback and suggestions! Please email us at <a href='mailto:feedback@creatifyai.com' className='text-blue-500 hover:underline'>feedback@creatifyai.com</a> with your ideas or suggestions.
              </p>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>12. Where can I find tutorials and guides?</h2>
              <p className='text-lg'>
                Visit our <a href='#' className='text-blue-500 hover:underline'>Help Center</a> for detailed guides, tutorials, and other resources to help you use <strong>CreatifyAI</strong> effectively.
              </p>
            </div>

            <p className='text-lg'>
              If you have any other questions or need further assistance, please don’t hesitate to contact our support team.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
