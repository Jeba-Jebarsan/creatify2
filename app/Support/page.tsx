
import React from 'react';
import { Navbar } from '../(marketing)';

const SupportPage = () => {
  return (
    <div>
      {/* Pass a prop to change the navbar color */}
      <Navbar />

      <div className='bg-gradient-to-r bg-blue-950 text-white min-h-screen py-8 px-4 lg:px-8'>
        <h1 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '20px' }}>Support</h1>

        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          Welcome to the <strong>CreatifyAI</strong> Support Center! We’re here to help you with any questions or issues you may have.
        </p>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Getting Help</h2>

            <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>1. Frequently Asked Questions (FAQ)</h3>
            <p>
              Find answers to common questions about using <strong>CreatifyAI</strong>, including troubleshooting tips, feature explanations, and account management. Check out our FAQ section{' '}
              <a href='/Support/FAQ' className='text-blue-500 hover:underline'>
                here
              </a>.
            </p>

            <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>2. Contact Support</h3>
            <p>If you need further assistance, our support team is available to help. Please use the following methods to get in touch:</p>
            <ul className='list-disc ml-5'>
              <li>
                <strong>Email Support:</strong> Send us an email at{' '}
                <a href='mailto:creatifyio@gmail.com' className='text-blue-500 hover:underline'>
                  support@creatifyio@gmail.com
                </a>
                . We aim to respond to all inquiries within 24-48 hours.
              </li>
              <li>
                <strong>Mobile Number:</strong> Contact us at{' '}
                <a href='tel:+94707940599' className='text-blue-500 hover:underline'>
                  +94 70 794 0599
                </a>
                .
              </li>
              <li>
                <strong>Contact Form:</strong> Fill out our{' '}
                <a href='/Support/formcontect' className='text-blue-500 hover:underline'>
                  contact form
                </a>{' '}
                for a quick and easy way to reach out to our support team.
              </li>
            </ul>

            <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>3. Live Chat</h3>
            <p>
              Our live chat feature is coming soon. Stay tuned for updates!
            </p>

            <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>4. Help Center</h3>
            <p>
              Our Help Center is coming soon. Check back later for detailed guides, tutorials, and other resources to help you make the most of <strong>CreatifyAI</strong>.
            </p>

            <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>5. Community Forum</h3>
            <p>
              Join our{' '}
              <a href='/Support/Communityforum' className='text-blue-500 hover:underline'>
                Community Forum
              </a>{' '}
              to connect with other users, share tips, and get advice from our community.
            </p>
          </section>
        </div>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Support Hours</h2>
            <p>Our support team is available anytime. Feel free to reach out to us at any time.</p>
          </section>
        </div>

        <div className='bg-white text-black p-6 rounded-lg mb-6'>
          <section>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Feedback and Suggestions</h2>
            <p>
              We value your feedback and are always looking to improve our services. If you have suggestions or comments, please send them to{' '}
              <a href='mailto:creatifyio@gmail.com' className='text-blue-500 hover:underline'>
                feedback@creatifyio@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          Thank you for choosing <strong>CreatifyAI</strong>. We’re here to support you and ensure you have the best experience possible!
        </p>
      </div>
    </div>
  );
};

export default SupportPage;
