"use client"

import { useState } from "react"
import { BsArrowLeftShort, BsChevronDown, BsSearch } from "react-icons/bs"

interface SideBarProps {
  onClose: () => void;
}

export default function SideBar({ onClose }: SideBarProps) {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    {
      title: "Shop",
      spacing: true,
      submenu: true,
      submenuItems: [
        { title: "Brand" },
        { title: "Category" },
      ],
    },
    { title: "Profile", spacing: true },
    { title: "Setting" },
    { title: "About us" },
    { title: "Logout" }
  ]

  return (
    <div className="flex">
      <div className={` bg-stone-700 bg-opacity-80 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 absolute`}>
        <BsArrowLeftShort className={`bg-white text-blue-950
          text-3xl rounded-full absolute -right-3 top-9 border border-blue-950
          cursor-pointer ${!open && 'rotate-180'}`}
          onClick={() => { setOpen(!open); onClose(); }}
        />
        <div className="inline-flex">
          <h1 className={`text-white origin-left font-medium text-2xl
          duration-300
          ${!open && "scale-0"}
          `}>
            savvist
          </h1>
        </div>
        <div className={`flex items-center rounded-md
         bg-slate-200 mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
          <input type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-white
          focus:outline-none`} />
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-100 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => {
                    setSubmenuOpen(!submenuOpen)
                  }} />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems?.map((submenuItem, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-200 rounded-md">
                      {submenuItem.title}
                    </li>
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

