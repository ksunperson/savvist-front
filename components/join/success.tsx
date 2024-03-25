import Link from "next/link";

export default function SignupSuccess() {
  return (
    <div className="justify-center items-center text-center">
      <div className="text-3xl pt-48 custom-font">
        회원가입 완료
        <p className="text-base mt-6 mb-10">로그인하고 savvist를 둘러보세요!</p>
      </div >
      <div>
        <Link href="/login">
          <button className="bg-custom-green text-white font-bold text-xs py-2 px-4 rounded mt-8 w-32">
            로그인하기
          </button>
        </Link>
      </div>
    </div >
  )
}