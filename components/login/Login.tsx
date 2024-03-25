"use client"
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {

    e.preventDefault(); // 새로고침하면 상태값 다 사라져서 새로고침 방지 해놓음
    
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        userid,
        password,
      });
      console.log(response); 
      console.log('로그인 성공:', response.data);// 로그인 성공 시 서버에서 반환한 데이터를 확인
      router.push('/');
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    
    <div className="flex justify-center items-center mt-32">
      <form onSubmit={handleLogin} className="w-80">
        <div>
          <h2 className="text-center font-semibold sm:text-xl">로그인</h2>
          <div className="mt-10">
            <input
              type="text"
              name="userid"
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
              autoComplete="userid"
              className="block p-2 w-full placeholder-gray-400 text-xs border rounded outline-none"
              placeholder="아이디"
            />
          </div>
          <div className="flex mt-2">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="password"
              className="block p-2 w-full placeholder-gray-400 text-xs border rounded outline-none"
              placeholder="비밀번호"
            />
          </div>
          <button className="bg-custom-green text-white font-bold text-xs py-2 px-4 rounded mt-8 w-full">
            로그인
          </button>
          <Link href="/join">
            <button className="text-custom-green border border-custom-green font-bold text-xs py-2 px-4 rounded mt-2 w-full">
              회원가입
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
