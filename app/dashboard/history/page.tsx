import Templates from '@/app/(data)/Templates';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import Image from 'next/image';
import React from 'react';
import { TEMPLATE } from '../_components/TemplateListSection';
import CopyButton from '@/components/ui/CopyButton';

export interface HISTORY {
  id: number;
  formData: string | null;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}

// Utility function to count words
const countWords = (text: string): number => {
  return text.trim().split(/\s+/).length;
};

// Format date to display in a more readable format
const formatDate = (dateString: string | null): string => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

async function History() {
  const user = await currentUser();

  if (!user || !user.primaryEmailAddress) {
    return (
      <div className="m-5 p-5 border rounded-lg bg-white shadow-lg">
        <h2 className="font-bold text-2xl md:text-3xl text-primary">History</h2>
        <p className="text-gray-500">No user logged in or email address is missing.</p>
      </div>
    );
  }

  const rawHistoryList = await db.select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
    .orderBy(desc(AIOutput.id));

  const HistoryList: HISTORY[] = rawHistoryList.map((item) => ({
    id: item.id,
    formData: item.formData,
    aiResponse: item.airesponse,
    templateSlug: item.templateSlug,
    createdBy: item.createdBy,
    createdAt: new Date().toISOString(), // Set current date
  }));

  const GetTemplateName = (slug: string): TEMPLATE | undefined => {
    return Templates?.find((item) => item.slug === slug);
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white shadow-lg">
      <h2 className="font-bold text-2xl md:text-3xl text-primary mb-2">Your Content History</h2>
      <p className="text-gray-600 text-sm md:text-base mb-4">Explore your previously generated content below:</p>

      {HistoryList.length === 0 ? (
        <p className="text-gray-500 mt-5 p-4 bg-gray-100 rounded-lg">No history found. Create some amazing content to see it listed here!</p>
      ) : (
        <>
          <div className='hidden md:grid grid-cols-5 font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white mt-5 py-3 px-3 rounded-t-lg'>
            <h2 className='col-span-1'>TEMPLATE</h2>
            <h2 className='col-span-1'>AI RESPONSE</h2>
            <h2 className='col-span-1'>WORD COUNT</h2>
            <h2 className='col-span-1'>DATE</h2>
            <h2 className='col-span-1'>ACTIONS</h2>
          </div>
          {HistoryList.map((item: HISTORY, index: number) => (
            <div
              key={index}
              className="flex flex-col md:grid md:grid-cols-5 gap-4 my-5 py-3 px-3 border-b border-gray-300 hover:bg-gray-50 transition duration-300"
            >
              <div className="flex items-center md:col-span-1">
                {GetTemplateName(item.templateSlug)?.icon && (
                  <Image
                    src={GetTemplateName(item.templateSlug)?.icon || '/path/to/fallback/image.png'}
                    width={50}
                    height={50}
                    alt="Template Icon"
                    className="rounded-full"
                  />
                )}
                <span className="ml-2 font-medium">{GetTemplateName(item.templateSlug)?.name || 'Unknown Template'}</span>
              </div>
              <div className="md:col-span-1 p-2 border border-gray-300 rounded-lg bg-gray-100 overflow-y-auto h-24 hover:shadow-md transition duration-300">
                <p className="text-sm">{item.aiResponse || 'No response'}</p>
              </div>
              <div className="md:col-span-1 text-gray-600">
                {item.aiResponse ? countWords(item.aiResponse) : 0} words
              </div>
              <div className="md:col-span-1 text-gray-600">{formatDate(item.createdAt)}</div>
              <div className="md:col-span-1">
                <CopyButton textToCopy={item.aiResponse || ''} />
              </div>
            </div>
          ))}
        </>
      )}

      <hr className="my-6 border-t border-gray-300" />
    </div>
  );
}

export default History;