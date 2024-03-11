import DaumPost from "./Address";

export default function Join() {

  return (

    <form>
      <div className="space-y-12 m-20">
        <h2 className="text-base font-semibold">회원가입</h2>

        <div>
          <label htmlFor="username" className="block text-sm font-medium">
            이름
          </label>
          <div className="flex mt-2">
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
              placeholder="이름을 입력해주세요."
            />
          </div>
        </div>
        <div>
          <label htmlFor="userid" className="block text-sm font-medium">
            아이디
          </label>
          <div className="flex mt-2 ">
            <input
              type="text"
              name="userid"
              id="userid"
              autoComplete="userid"
              className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
              placeholder="아이디 입력(6~20자)"
            />
            <button className="text-custom-green sm:text-xs py-2 px-4 ml-2 rounded">
              중복 확인
            </button>
          </div>

        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            비밀번호
          </label>
          <div className="flex mt-2">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
              placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            비밀번호 재입력
          </label>
          <div className="flex mt-2">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
              placeholder="비밀번호 재입력"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            휴대폰 번호
          </label>
          <div className="flex mt-2">
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="phone"
              className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
              placeholder="숫자만 입력해주세요"
            />
          </div>
        </div>

        <div>
          <label htmlFor="nickname" className="block text-sm font-medium">
            닉네임
          </label>
          <div className="flex mt-2">
            <input
              type="text"
              name="nickname"
              id="nickname"
              autoComplete="nickname"
              className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
              placeholder="닉네임 입력"
            />
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium">
            주소
          </label>
          <div className="flex mt-2">
            <DaumPost />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="submit" className="bg-custom-green text-white sm:text-xs py-2 px-4 ml-2 rounded">
          가입하기
        </button>
      </div>
    </form >
  )
}
