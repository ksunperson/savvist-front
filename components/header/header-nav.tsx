"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderSidebar from "./header-sidebar";

export default function HeaderNavigation({ showLogo = false }) {
  const path = usePathname();

  return (
    <div className={`flex justify-between  custom-font ''}`
    }>
      {/* sidebar */}
      <div className="flex justify-start" style={{ zIndex: 2 }}>
        <HeaderSidebar />
      </div>
      {/* 상단 로고 */}
      {
        (path !== "/" || showLogo) && (
          <div className="flex text-3xl pt-10" style={{ zIndex: 1 }}>
            <Link href="/">
              savvist
            </Link>
          </div>
        )
      }
      {/* 상단 로그인과 카트 버튼 */}
      <div className="flex justify-end pt-10 mr-10" style={{ zIndex: 1 }}>
        <Link href="/login">
          <div className="mr-6">로그인</div>
        </Link>
        <div>카트</div>
      </div>
    </div >
  )
}