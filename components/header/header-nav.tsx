"use client"

import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";
import { usePathname } from "next/navigation";

export default function HeaderNavigation({ showLogo = false }) {
  const path = usePathname();
  return (
    <div className="flex justify-between mt-10 custom-font">
      <div className="flex justify-start ml-10">
        <TbMenu2 size={30} />
      </div>
      {(path !== "/" || showLogo) && (
        <div className="flex text-3xl">
          <Link href="/">
            savvist
          </Link>
        </div>
      )}
      <div className="flex justify-end mr-10">
        <Link href="/login">
          <div className="mr-6">로그인</div>
        </Link>
        <div>카트</div>
      </div>
    </div>
  )
}