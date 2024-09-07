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

// Utility function to count letters only
const countLetters = (text: string): number => {
  return (text.match(/[a-zA-Z]/g) || []).length;
};

async function History() {
  const user = await currentUser();

  if (!user || !user.primaryEmailAddress) {
    return (
      <div className="m-5 p-5 border rounded-lg bg-white">
        <h2 className="font-bold text-2xl md:text-3xl">History</h2>
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
    createdAt: item.createdAt,
  }));

  const GetTemplateName = (slug: string): TEMPLATE | undefined => {
    return Templates?.find((item) => item.slug === slug);
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-2xl md:text-3xl">History</h2>
      <p className="text-gray-500 text-sm md:text-base">Search your previously generated content below:</p>

      {HistoryList.length === 0 ? (
        <p className="text-gray-500 mt-5">No history found. Create some content to see it listed here.</p>
      ) : (
        <>
          <div className='hidden md:grid grid-cols-5 font-bold bg-secondary mt-5 py-3 px-3 bg-slate-200'>
            <h2 className='col-span-1'>TEMPLATE</h2>
            <h2 className='col-span-1'>AI RESP</h2>
            <h2 className='col-span-1'>DATE</h2>
            <h2 className='col-span-1'>LETTERS</h2>
            <h2 className='col-span-1'>COPY</h2>
          </div>
          {HistoryList.map((item: HISTORY, index: number) => (
            <div
              key={index}
              className="flex flex-col md:grid md:grid-cols-5 gap-4 my-5 py-3 px-3 border-b border-gray-300"
            >
              <div className="flex items-center md:col-span-1">
                {GetTemplateName(item.templateSlug)?.icon && (
                  <Image
                    src={GetTemplateName(item.templateSlug)?.icon || '/path/to/fallback/image.png'}
                    width={50}
                    height={50}
                    alt="Template Icon"
                  />
                )}
                <span className="ml-2">{GetTemplateName(item.templateSlug)?.name || 'Unknown Template'}</span>
              </div>
              <div className="md:col-span-1 p-2 border border-gray-300 rounded-lg bg-gray-100 overflow-y-auto h-24">
                <p>{item.aiResponse || 'No response'}</p>
              </div>
              <div className="md:col-span-1">{item.createdAt}</div>
              <div className="md:col-span-1">
                {item.aiResponse ? countLetters(item.aiResponse) : '0'}
              </div>
              <div className="md:col-span-1">
                <CopyButton textToCopy={item.aiResponse || ''} />
              </div>
            </div>
          ))}
        </>
      )}

      <hr />
    </div>
  );
}

export default History;