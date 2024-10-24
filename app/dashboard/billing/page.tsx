"use client"
import React, { useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Button } from "@/components/ui/button";
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Billing: React.FC = () => {
  const { user } = useUser();
  const [countdown, setCountdown] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isOfferActive, setIsOfferActive] = useState<boolean>(true);
  const [showPayment, setShowPayment] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date('2024-10-05T21:31:00+05:30');
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
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
    const intervalId = setInterval(calculateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const saveSubscriptionToDatabase = async (paymentDetails: any) => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      throw new Error('User email not found');
    }

    try {
      await db.insert(UserSubscription).values({
        email: user.primaryEmailAddress.emailAddress,
        userName: user.username || '',
        active: true,
        paymentId: paymentDetails.id,
        joinDate: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error saving subscription:', error);
      throw error;
    }
  };

  const handlePaymentSuccess = async (details: any) => {
    setIsProcessing(true);
    setMessage('Processing your payment...');

    try {
      await saveSubscriptionToDatabase(details);
      setMessage('Payment successful! Activating your subscription...');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => window.location.reload(), 3000);
    } catch (error) {
      console.error('Payment processing error:', error);
      setMessage('There was a problem activating your subscription. Please contact support.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
    >
      <h1 className="text-center font-bold text-4xl mb-8" style={{ background: 'linear-gradient(to right, #1e3a8a, #9333ea, #dc2626)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Upgrade Your Plan</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-start">
        {/* Free Plan */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="rounded-3xl border-2 border-gray-300 overflow-hidden bg-white shadow-lg"
        >
          <div className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Free</h2>
              <h4 className='text-gray-600'>Free forever</h4>

              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              <li className="text-gray-700 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                10,000 Words/Month
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                50+ Content Templates
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Unlimited Download & Copy
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                1 Month of History
              </li>
            </ul>

            <Button 
              className="w-full mt-8 bg-gray-600 hover:bg-gray-700 transition-all duration-300"
              variant="secondary"
            >
              Currently Active Plan
            </Button>
          </div>
        </motion.div>

        {/* Monthly Plan */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="rounded-3xl border-2 border-blue-500 overflow-hidden bg-white shadow-lg"
        >
          <div className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Monthly</h2>
              <h4 className='text-gray-600'>Get the best of Creatify</h4>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-blue-600">$9.99</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              <li className="text-gray-700 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                1,00,000 Words/Month
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                50+ Templates Access
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Unlimited Download & Copy
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                1 Year of History
              </li>
            </ul>

            <div className="mt-8">
              {!showPayment ? (
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  onClick={() => setShowPayment(true)}
                >
                 {UserSubscription ? 'Active Plan' : 'Get Started'}
                </Button>
              ) : !isOfferActive && (
                <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string }}>
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [{
                          amount: {
                            currency_code: 'USD',
                            value: '9.99',
                          },
                        }],
                        intent: 'CAPTURE'
                      });
                    }}
                    onApprove={async (data, actions) => {
                      if (actions.order) {
                        const details = await actions.order.capture();
                        await handlePaymentSuccess(details);
                      }
                    }}
                    disabled={isProcessing}
                  />
                </PayPalScriptProvider>
              )}
            </div>

            <div className="mt-4 text-red-500 text-center">{message}</div>
            {isProcessing && <p className="text-center">Processing your payment...</p>}
          </div>
        </motion.div>
      </div>

      {isOfferActive && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-lg font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Special Offer! Get it before {countdown}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Billing;