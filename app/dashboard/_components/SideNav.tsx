"use client";

import {
  History,
  HomeIcon,
  SettingsIcon,
  Wallet2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: HomeIcon,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: History,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: Wallet2,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: SettingsIcon,
      path: "/dashboard/Settings",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]); // Log path changes

  const refreshPage = () => {
    window.location.reload(); // Refresh the current page
  };

  return (
    <div className="h-screen relative p-2 shadow-sm border bg-white">
      <div className="flex flex-col items-center">
        <div onClick={refreshPage} className="cursor-pointer">
          <Image src={"/logo.svg"} alt="logo" width={120} height={100} />
        </div>
        <div onClick={refreshPage} className="cursor-pointer">
        <h2 className="mt-2 text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          Creatify
        </h2>
        </div> {/* Added "Creatify" name with gradient */}
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-blue-800 hover:text-white rounded-lg cursor-pointer items-center ${
                path === menu.path ? "bg-blue-800 text-white" : ""
              }`}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
