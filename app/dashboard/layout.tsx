"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContex } from "../(context)/TotalUsageContex";
import { UserSubscriptionContex } from "../(context)/UserSubscriptionContex";
import { UpdateCreditUsageContex } from "../(context)/UpdateCreditUsageContex";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [UserSubscription, setUserSubscription] = useState<boolean>(false);
  const [UpdateCreditUsage, setUpdateCreditUsage] = useState<any>();
  const [isSideNavVisible, setIsSideNavVisible] = useState<boolean>(false);

  const toggleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  return (
    <TotalUsageContex.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContex.Provider value={{ UserSubscription, setUserSubscription }}>
        <UpdateCreditUsageContex.Provider value={{ UpdateCreditUsage, setUpdateCreditUsage }}>
          <div className="bg-slate-100 min-h-screen">
            <SideNav isVisible={isSideNavVisible} toggleSideNav={toggleSideNav} />
            <div className="md:ml-64">
              <Header toggleSideNav={toggleSideNav} />
              {children}
            </div>
          </div>
        </UpdateCreditUsageContex.Provider>
      </UserSubscriptionContex.Provider>
    </TotalUsageContex.Provider>
  );
}

export default layout;