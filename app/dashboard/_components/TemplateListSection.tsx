import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'
import Templates from '@/app/(data)/Templates';
import { useMediaQuery } from 'react-responsive';

export interface TEMPLATE {
  form: any;
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPromt: string;
  from?: FROM[] 
}

export interface FROM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection({userSearchInput, selectedCategory}:any) {
  const [templateList,setTemplateList]=useState(Templates)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let filteredData = Templates;

    if (selectedCategory) {
      filteredData = filteredData.filter(item => 
        item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (userSearchInput) {
      filteredData = filteredData.filter(item =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
    }

    setTemplateList(filteredData);
  }, [userSearchInput, selectedCategory]);

  return (
    <div className={`${isMobile ? 'flex flex-col' : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-5 p-10`}>
      {templateList.map((item:TEMPLATE, index: number) => (
        <TemplateCard key={index} {...item}/>
      ))}
    </div>
  )
}

export default TemplateListSection