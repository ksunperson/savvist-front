"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderSidebarToggler from "./HeaderSidebarToggler";

export default function HeaderNavigation({ showLogo = false }) {
  const path = usePathname();

  return (
    <div className="flex justify-between">
      <HeaderSidebarToggler />
      {/* 상단로고는 path !== "/"일 때 나타남 */}
      {
        (path !== "/" || showLogo) && (
          <div className="text-3xl pt-10 custom-font">
            <Link href="/">
              savvist
            </Link>
          </div>
        )
      }
      {/* header 오른쪽 로그인과 카트 버튼*/}
      <div className="flex pt-10 mr-10" >
        <Link href="/login">
          <div className="mr-6">로그인</div>
        </Link>
        <div>카트</div>
      </div>
    </div >
  )
}