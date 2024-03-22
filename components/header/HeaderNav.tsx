"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderSidebarToggler from "./HeaderSidebarToggler";
import { useEffect, useState} from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function HeaderNavigation({ showLogo = false }) {
  const path = usePathname();
  const [user, setUser] = useState(null);
  const [isLoggedIn,setLogin] = useState(false);
  const history = usePathname();
  const logout = async () => {
    try{
      const response = await axios.get('http://localhost:5000/auth/logout')
      console.log(response);
      setUser(null);
      setLogin(false)
      window.location.reload();
    }
    catch (error){
      console.log("로그아웃에 실패하였습니다:", error);
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/user');
        console.log(response);
        if (response) {
          const userData = response.data.username;
          console.log(userData)
          setUser(userData);
          setLogin(true);
        } else {
          // 사용자가 인증되지 않은 경우
          setUser(null);
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };
    
    fetchUserData();
  }, [history]);

  return (
    <div className="flex justify-between">
      <HeaderSidebarToggler />
      {/* 상단로고는 path !== "/"일 때 나타남 */}
      {
        (path !== "/" || showLogo) && (
          <div className="flex pt-10 custom-font">
            <Link href="/">
              savvist
            </Link>
          </div>
        )
      }
      {/* header 오른쪽 로그인과 카트 버튼*/}
      <div className="flex pt-10 mr-10" >
      {isLoggedIn ?
        <button onClick={logout}>
          <div className="mr-6">로그아웃</div>
        </button>
        :
        <Link href="/login">
          <div className="mr-6">로그인</div>
        </Link>
      }
        <div className="mr-6">카트</div>
        {user? (
        <div>{user}님</div>
        ) : (
        <div></div>
        )
        }
      </div>
    </div >
  )
}
