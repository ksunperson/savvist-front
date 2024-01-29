"use client";

import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SideBar from "../sidebar";

export default function HeaderNavigation({ showLogo = false }) {
  const path = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`flex justify-between mt-10 custom-font ${isSidebarOpen ? 'overflow-hidden' : ''}`}>
      <div className="flex justify-start ml-10" style={{ zIndex: 2 }}>
        <TbMenu2 className="cursor-pointer" size={30} onClick={toggleSidebar} />
        {isSidebarOpen && <SideBar onClose={toggleSidebar} />}
      </div>
      {(path !== "/" || showLogo) && (
        <div className="flex text-3xl" style={{ zIndex: 1 }}>
          <Link href="/">
            savvist
          </Link>
        </div>
      )}
      <div className="flex justify-end mr-10" style={{ zIndex: 1 }}>
        <Link href="/login">
          <div className="mr-6">로그인</div>
        </Link>
        <div>카트</div>
      </div>
    </div>
  )
}
