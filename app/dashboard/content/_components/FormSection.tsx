"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2, Loader2Icon, LoaderIcon, LoaderPinwheel, LucideLoader2 } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
interface PROPS{
    selectedTemplate?:TEMPLATE
    userFormInput:any
    loarding:boolean

}
function FormSection({selectedTemplate,userFormInput,loarding}:PROPS) {
  const [formData,setFormData]=useState<any>();
  const handleInputChange=(event:any)=>{
    const {name,value}=event.target;
    setFormData({...formData,[name]:value})
  
  }
 
  const onSumbit=(e:any)=>{
    e.preventDefault();
    userFormInput(formData)

  }
  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70}/>
        <h2 className='font-bold text-2xl mb-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-transparent bg-clip-text'>{selectedTemplate?.name}</h2>
        <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>
        <form className='mt-6' onSubmit={onSumbit}>
            {selectedTemplate?.form?.map((item:any, index:any) => (
                <div className='my-2 flex flex-col gap-2 mb-7'>
                    <label className='font-semibold'>{item.label}</label>
                    {item.field=='input'?
                        <Input name={item.name} required={item?.required}
                        onChange={handleInputChange}
                        
                        />
                        :item.field=='textarea'?
                        <Textarea name={item.name} required={item?.required}
                        onChange={handleInputChange}/>:null

                    }
                </div>

            ))}
            
            <Button type="submit" 
            className='w-full py-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-600 hover:to-blue-500 rounded-lg transition-colors duration-300' disabled={loarding}>
              {loarding ? 
                <Image src="/logo.svg" alt="Loading" width={32} height={32} className="animate-spin mr-2"/> :
                null
              }
              Generate Content</Button>
        </form>
    </div>
  )
}

export default FormSection