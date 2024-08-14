'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PaymentDetails } from './payhere'; // Adjust the import path if needed

const Billing: React.FC = () => {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  const [countdown, setCountdown] = useState<string>(''); // State for countdown timer
  const [message, setMessage] = useState<string>(''); // State for alert message
  const [isOfferActive, setIsOfferActive] = useState<boolean>(true); // State for offer status

  useEffect(() => {
    const loadPayHereScript = () => {
      const script = document.createElement('script');
      script.src = 'https://www.payhere.lk/lib/payhere.js';
      script.async = true;
      script.onload = () => {
        console.log('PayHere script loaded successfully');
        setPaymentDetails({
          sandbox: true,
          merchant_id: '1227921', // Your Merchant ID
          return_url: 'http://localhost:3000/dashboard/billing',
          cancel_url: 'http://localhost:3000/dashboard/billing',
          notify_url: 'http://yourwebsite.com/notify',
          order_id: 'ORD1272', // Unique Order ID
          items: 'Creatify',
          amount: '2990.00', // Amount in LKR
          currency: 'LKR',
          hash: '45D3CBA93E9F2189BD630ADFE19AA6DC', // Correct hash from backend
          first_name: 'Thoams',
          last_name: 'Jebarsan',
          email: 'creatifyio@gmail.com',
          phone: '0767533798',
          address: 'murunkan',
          city: 'mannan',
          country: 'Sri Lanka',
          delivery_address: 'No. 46, Galle road, Kalutara South',
          delivery_city: 'Kalutara',
          delivery_country: 'Sri Lanka'
        });
      };

      script.onerror = () => {
        console.error('Failed to load PayHere script');
      };

      document.body.appendChild(script);
    };

    loadPayHereScript();
  }, []);

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date('2024-08-10T20:44:00+05:30'); // August 11, 2024, 09:20 AM Sri Lankan time
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        //setCountdown('The offer has expired.');
        setIsOfferActive(false);
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    calculateCountdown();
    const intervalId = setInterval(calculateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handlePayment = () => {
    const now = new Date();
    const targetDate = new Date('2024-08-10T20:44:00+05:30'); // August 11, 2024, 09:20 AM Sri Lankan time

    if (now < targetDate) {
      setMessage('Free for one month. Enjoy! 🎉');
      setTimeout(() => {
        setMessage('');
      }, 3000); // Hide the message after 3 seconds
    } else if (window.payhere && paymentDetails) {
      window.payhere.startPayment(paymentDetails);

      window.payhere.onCompleted = (orderId: string) => {
        console.log('Payment completed. OrderID: ' + orderId);
        // Handle payment completion (e.g., redirect to a success page)
      };

      window.payhere.onDismissed = () => {
        console.log('Payment dismissed');
        // Handle payment dismissal
      };

      window.payhere.onError = (error: string) => {
        console.log('Payment error: ' + error);
        // Handle errors
      };
    } else {
      console.error('PayHere is not available on window or payment details are missing');
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h2 className="text-center font-bold text-3xl my-3">Upgrade Your Plan</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center">
        {/* Free Plan */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Free
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">0</strong>
              <span className="text-sm font-medium text-gray-700">
                {isOfferActive ? `/month (after 1st month: $9.99/month)` : '/month'}
              </span>
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-indigo-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700">10,000 Words/Month</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-indigo-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700">50+ Content Templates</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-indigo-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700">Unlimited Download & Copy</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-indigo-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700">1 Month of History</span>
            </li>
          </ul>
          <a
            href="#"
            className="mt-8 block rounded-full border border-indigo-600 px-12 py-3 text-center text-sm font-medium bg-gray-500 text-white hover:bg-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Currently Active Plan
          </a>
        </div>

        {/* Monthly Plan */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Monthly
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {isOfferActive ? '0' : '9.99'}
              </strong>
              <span className="text-sm font-medium text-gray-700">
                {isOfferActive ? '/month (after 1st month: $9.99/month)' : '/month'}
              </span>
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-indigo-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700">1,00,000 Words/Month</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-indigo-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700">50+ Templates Access</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-indigo-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700">Unlimited Download & Copy</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-indigo-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700">1 Year of History</span>
            </li>
          </ul>
          <button
            onClick={handlePayment}
            className="mt-8 block rounded-full border border-indigo-600 px-12 py-3 text-center text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700"
          >
            {isOfferActive ? 'Upgrade' : 'Subscribe'}
          </button>
        </div>
      </div>
      {message && (
        <div className="mt-4 text-center text-green-600 font-medium">
          {message}
        </div>
      )}
      <div className="mt-4 text-center">
        <p className="text-lg font-medium text-gray-900">
           {countdown}
        </p>
      </div>
    </div>
  );
};

export default Billing;
