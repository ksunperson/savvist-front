import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center items-center mt-32">
      <form className="w-80">
        <div>
          <h2 className="text-center font-semibold sm:text-xl">로그인</h2>
          <div className="mt-10">
            <input
              type="text"
              name="userid"
              id="userid"
              autoComplete="userid"
              className="block p-2 w-full placeholder-gray-400 text-xs border rounded outline-none"
              placeholder="아이디"
            />
          </div>
          <div className="flex mt-2">
            <input
              type="password"
              name="password"
              id="password"
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
