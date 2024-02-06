"use client"

import { useState } from "react"
import { BsChevronDown, BsX } from "react-icons/bs"

interface SideBarProps {
  onClose: () => void;
}

export default function SideBar({ onClose }: SideBarProps) {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "about us", spacing: true },
    {
      title: "shop",
      submenu: true,
      submenuItems: [
        { title: "brand" },
        { title: "category" },
      ],
    },
    { title: "setting" },
    { title: "logout" }
  ]

  return (
    <div className="flex">
      <div className={`bg-neutral-200 bg-opacity-80 h-screen p-5 pt-48 ${open ? "w-96" : ""} absolute`}>
        {/* 사이드바 X 버튼 */}
        <BsX className="text-black text-2xl absolute right-5 top-8 cursor-pointer" onClick={() => { setOpen(!open); onClose(); }} />
        {/* 사이드바 메뉴 mapping */}
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              {/* menu */}
              <li key={index} className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-custom-green ${menu.spacing ? "mt-9" : "mt-2"} duration-200`}>
                <span className={`flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                {menu.submenu && open && <BsChevronDown className={`stroke-1 ${submenuOpen && "rotate-180"} duration-200`} onClick={() => { setSubmenuOpen(!submenuOpen) }} />}
              </li>
              {/* submenu */}
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems?.map((submenuItem, index) => (
                    <li key={index} className="text-black text-sm flex items-center gap-x-4 hover:text-custom-green cursor-pointer p-2 px-5 duration-200">{submenuItem.title}</li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}
