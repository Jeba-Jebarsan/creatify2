import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput, UserSubscription as UserSubscriptionSchema } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { HISTORY } from '../history/page';
import { TotalUsageContex } from '@/app/(context)/TotalUsageContex';
import { UserSubscriptionContex } from '@/app/(context)/UserSubscriptionContex';
import { UpdateCreditUsageContex } from '@/app/(context)/UpdateCreditUsageContex';

const countLetters = (text: string): number => {
  return (text.match(/[a-zA-Z]/g) || []).length;
};

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContex);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContex);
  const { UpdateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContex);
  
  const [loading, setLoading] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<string>(''); 
  const [isOfferActive, setIsOfferActive] = useState<boolean>(true); 
  const [hasCountdownExpired, setHasCountdownExpired] = useState<boolean>(false);
  const [maxWords, setMaxWords] = useState<number>(10000); // Default max words for non-subscribers

  useEffect(() => {
    calculateCountdown();
    const intervalId = setInterval(calculateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (hasCountdownExpired && user) {
      fetchData();
    }
  }, [hasCountdownExpired, user]);

  useEffect(() => {
    if (UpdateCreditUsage && user) {
      fetchData();
    }
  }, [UpdateCreditUsage, user]);

  const fetchData = async () => {
    setLoading(true);
    const userEmail = user?.primaryEmailAddress?.emailAddress;

    if (!userEmail) {
      console.error("User email is not defined.");
      setLoading(false);
      return;
    }

    try {
      const rawResult = await db.select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, userEmail));
      
      const userSubscriptionResult = await db.select()
        .from(UserSubscriptionSchema)
        .where(eq(UserSubscriptionSchema.email, userEmail));

      console.log("User Subscription Result:", userSubscriptionResult);

      if (userSubscriptionResult.length > 0) {
        setUserSubscription(true);
        setMaxWords(100000); // Set to 100,000 words for active subscription
      } else {
        setUserSubscription(false);
        setMaxWords(10000); // Default max words for non-subscribers
      }
      
      const historyResults: HISTORY[] = rawResult.map((item) => ({
        id: item.id,
        formData: item.formData,
        aiResponse: item.airesponse,
        templateSlug: item.templateSlug,
        createdBy: item.createdBy,
        createdAt: item.createdAt,
      }));

      calculateTotalUsage(historyResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotalUsage = (historyList: HISTORY[]) => {
    let total = 0;
    historyList.forEach((item) => {
      if (item.aiResponse) {
        total += countLetters(item.aiResponse);
      }
    });
    setTotalUsage(total);
  };

  const calculateCountdown = () => {
    const targetDate = new Date('2024-08-10T20:44:00+05:30');
    const now = new Date();
    const timeDiff = targetDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
      setCountdown('The offer has expired.');
      setIsOfferActive(false);
      setHasCountdownExpired(true);
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  const handleFeedback = () => {
    const feedbackEmail = 'jthomasjebarsan@gmail.com';
    const subject = 'Feedback on Your Service';
    const body = 'Please provide your feedback here.';

    window.location.href = `mailto:${feedbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const totalCredits = maxWords; // Use maxWords to calculate total credits
  const usageExceeded = totalUsage >= totalCredits;
  const usageInfo = usageExceeded 
    ? "Your limit is over"
    : `${totalUsage}/${totalCredits} Credits Used (${(totalUsage / totalCredits * 100).toFixed(2)}%)`; // Display usage correctly

  return (
    <div className='m-5'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium'>
          {isOfferActive ? 'Enjoy for free until September 14, 2024.' : 'Credits'}
        </h2>
        {isOfferActive ? (
          <p className='text-sm my-2'>{countdown}</p>
        ) : (
          <div>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
              <div
                className='h-2 bg-white rounded-full'
                style={{ width: `${Math.min((totalUsage / totalCredits) * 100, 100)}%` }}
              ></div>
            </div>
            <h2 className='text-sm my-2'>
              {loading ? 'Loading...' : usageInfo}
            </h2>
          </div>
        )}
      </div>
      {!isOfferActive && (
        <Button 
          variant={'secondary'} 
          className='mt-3'
          onClick={handleFeedback}
        >
          Give Feedback
        </Button>
      )}
    </div>
  );
}

export default UsageTrack;
