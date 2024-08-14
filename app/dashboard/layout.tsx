"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContex } from '../(context)/TotalUsageContex';
import { UserSubscriptionContex } from '../(context)/UserSubscriptionContex';
import { UpdateCreditUsageContex } from '../(context)/UpdateCreditUsageContex';


function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [totalUsage,setTotalUsage]=useState<Number>(0);
    const [UserSubscription,setUserSubscription]=useState<boolean>(false);
    const [UpdateCreditUsage,setUpdateCreditUsage]=useState<any>()

  return (
    <TotalUsageContex.Provider value={{totalUsage,setTotalUsage}}>
      <UserSubscriptionContex.Provider value={{UserSubscription,setUserSubscription}}>
        <UpdateCreditUsageContex.Provider value={{UpdateCreditUsage,setUpdateCreditUsage}}>
    <div className='bg-slate-100 h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav/>
        </div>
        <div className='md:ml-64'>
            <Header/>
        {children}
       </div>
    </div>
    </UpdateCreditUsageContex.Provider>
    </UserSubscriptionContex.Provider>
    </TotalUsageContex.Provider>
  )
}

export default layout
