"use client";

import { SearchIcon, History, HomeIcon, SettingsIcon, Wallet2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import UsageTrack from "./UsageTrack";

// Define types for the props
interface SideNavProps {
  isVisible: boolean;
  toggleSideNav: () => void;
}

function SideNav({ isVisible, toggleSideNav }: SideNavProps) {
  const [activeMenu, setActiveMenu] = useState("");

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
    setActiveMenu(path);
  }, [path]);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed h-screen p-2 shadow-lg border-r border-gray-200 bg-gradient-to-b from-white to-blue-50 z-40 transition-all duration-300 ease-in-out ${
          isVisible ? "left-0" : "-left-full"
        } md:left-0 w-64`}
      >
        {/* Close Button for Mobile View */}
        {isVisible && (
          <button
            onClick={toggleSideNav}
            className="absolute top-2 right-2 md:hidden p-2 rounded-full hover:bg-red-100 transition-colors duration-300 ease-in-out"
            aria-label="Close sidebar"
          >
            <X
              size={24}
              className="text-red-500 hover:text-red-700 transition-colors duration-300 ease-in-out"
            />
          </button>
        )}

        <div className="flex flex-col items-center">
          <div onClick={refreshPage} className="cursor-pointer transform hover:scale-105 transition-transform duration-300">
            {/* Updated logo image path */}
            <Image src="/logo.svg" alt="logo" width={100} height={100} className="drop-shadow-md" />
          </div>
          <div onClick={refreshPage} className="cursor-pointer">
            
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        <div className="mt-3">
          {MenuList.map((menu, index) => (
            <Link href={menu.path} key={index}>
              <div
                className={`flex gap-2 mb-2 p-3 rounded-lg cursor-pointer items-center transition-all duration-300 ${
                  activeMenu === menu.path
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-blue-100 text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setActiveMenu(menu.path)}
              >
                <menu.icon className={`h-6 w-6 ${activeMenu === menu.path ? "animate-pulse" : ""}`} />
                <h2 className="text-lg font-medium">{menu.name}</h2>
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute bottom-10 left-0 w-full px-2">
          <UsageTrack />
        </div>
      </div>

      {/* Overlay for mobile */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden backdrop-blur-sm transition-all duration-300"
          onClick={toggleSideNav}
        ></div>
      )}
    </div>
  );
}

export default SideNav;
