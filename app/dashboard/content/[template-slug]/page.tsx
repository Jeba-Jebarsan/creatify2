"use client"
import React, { useContext, useState, useEffect } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModal';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { TotalUsageContex } from '@/app/(context)/TotalUsageContex';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { UserSubscriptionContex } from '@/app/(context)/UserSubscriptionContex';
import { UpdateCreditUsageContex } from '@/app/(context)/UpdateCreditUsageContex';

interface PROPS {
    params: {
        'template-slug': String
    }
}

function CreateNewContent(props: PROPS) {
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === props.params['template-slug']);
    const [loarding, setLoarding] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>('');
    const { user } = useUser();
    const router = useRouter();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContex);
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContex);
    const {UpdateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContex)


    useEffect(() => {
        // Polling interval (e.g., every 5 seconds)
        const interval = setInterval(async () => {
            // Fetch the latest totalUsage from your server
            const response = await fetch('/api/get-total-usage');
            const data = await response.json();
            setTotalUsage(data.totalUsage);
        }, 5000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [setTotalUsage]);

    useEffect(() => {
        if (totalUsage >= 10000&&!userSubscription) {
            toast.error("You have reached your usage limit. Please upgrade your plan.");
            console.log("Please Upgrade");
            router.push('/dashboard/billing');
        }
    }, [totalUsage, router]);
    /**
     * Used to generate content from AI
     * @param formData 
     * @returns 
     */
    const GenerateAIContent = async (formData: any) => {
        if (totalUsage >= 10000&&!userSubscription) {
            toast.error("You have reached your usage limit. Please upgrade your plan.");
            console.log("Please Upgrade");
            router.push('/dashboard/billing');
            return;
        }

        setLoarding(true);
        const SelectedPromt = selectedTemplate?.aiPromt;
        const FinalAIPromt = JSON.stringify(formData) + ", " + SelectedPromt;
        
        const result = await chatSession.sendMessage(FinalAIPromt);
        console.log(result.response.text());

        setAiOutput(result?.response.text());
        await saveInDb(formData, selectedTemplate?.slug, result?.response.text());
        setLoarding(false);
        
        setUpdateCreditUsage(Date.now())

    

    }

    const saveInDb = async (formData: any, slug: any, aiResp: string) => {
        const result = await db.insert(AIOutput).values({
            formData: formData,
            templateSlug: slug,
            airesponse: aiResp,
            createdBy: user?.primaryEmailAddress?.emailAddress ?? '',
            createdAt: moment().format('DD/MM/yyyy'),
        });

        console.log(result);
    }

    return (
        <div className='p-10'>
            <Link href={"/dashboard"}>
                <Button className='bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-600 hover:to-blue-500 rounded-lg transition-colors duration-300 flex items-center justify-center'>
                    <ArrowLeft /> Back
                </Button>
            </Link>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                {/* FormSection */}
                <FormSection 
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => GenerateAIContent(v)}
                    loarding={loarding}
                />

                {/* OutputSection */}
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent;
