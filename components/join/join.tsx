"use client"

import Address from "./Address";
import { useForm, SubmitHandler } from 'react-hook-form';

interface IForm {
  username: "string",
  userid: "string",
  password: "string",
  passwordConfirm: "string",
  nickname: "string",
  phone: "number",
  email: "string",
  address: "string",
}

export default function Join() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IForm>({ mode: "onChange" })

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      if (data.password !== data.passwordConfirm) {
        setError('passwordConfirm', {
          message: '비밀번호가 일치하지 않습니다.',
        });
        return; // 비밀번호가 일치하지 않으면 함수 종료
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center mt-8">
      <form action="http://localhost:5000/auth/join" method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12 m-20">
          <h2 className="text-center font-semibold sm:text-xl">회원가입</h2>
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              이름
            </label>
            <div className="flex mt-2">
              <input
                type="text"
                id="username"
                autoComplete="username"
                className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
                {...register("username", {
                  required: "이름은 필수 입력입니다.",
                  minLength: {
                    value: 2,
                    message: "2글자 이상 입력해주세요"
                  }
                })}
              />
            </div>
            {errors.username && <p className="text-xs text-red-500" role="alert">{errors.username.message}</p>}
          </div>
          <div>
            <label htmlFor="userid" className="block text-sm font-medium">
              아이디
            </label>
            <div className="flex mt-2 ">
              <input
                type="text"
                id="userid"
                autoComplete="userid"
                className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
                placeholder="아이디 입력(6~20자)"
                {...register("userid", {
                  required: "아이디는 필수 입력입니다.",
                  minLength: {
                    value: 6,
                    message: "6글자 이상 입력해주세요"
                  }
                })}
              />
              <button className="bg-custom-green text-white font-bold text-xs py-2 px-4 ml-2 rounded w-30">
                중복 확인
              </button>
            </div>
            {errors.userid && <p className="text-xs text-red-500" role="alert">{errors.userid.message}</p>}
          </div>
          <div>
            <label htmlFor="nickname" className="block text-sm font-medium">
              닉네임
            </label>
            <div className="flex mt-2">
              <input
                type="text"
                id="nickname"
                autoComplete="nickname"
                className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
                placeholder="닉네임 입력"
                {...register("nickname", {
                  required: "닉네임은 필수 입력입니다.",
                })}
              />
            </div>
            {errors.nickname && <p className="text-xs text-red-500" role="alert">{errors.nickname.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              비밀번호
            </label>
            <div className="flex mt-2">
              <input
                type="password"
                id="password"
                autoComplete="password"
                className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
                placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~16자)"
                {...register("password", {
                  required: "비밀번호는 필수 입력입니다.",
                  minLength: {
                    value: 8,
                    message: "8자리 이상 비밀번호를 입력하세요.",
                  },
                  maxLength: {
                    value: 16,
                    message: "16자리 이하의 비밀번호만 사용가능합니다🥲",
                  },
                })}
              />
            </div>
            {errors.password && <p className="text-xs text-red-500" role="alert">{errors.password.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              비밀번호 확인
            </label>
            <div className="flex mt-2">
              <input
                type="password"
                id="passwordConfirm"
                autoComplete="passwordConfirm"
                className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
                placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~16자)"
                {...register("passwordConfirm", {
                  required: "비밀번호 확인은 필수 입력입니다.",
                })}
              />
            </div>
            {errors.passwordConfirm && <p className="text-xs text-red-500" role="alert">{errors.passwordConfirm.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              휴대폰 번호
            </label>
            <div className="flex mt-2">
              <input
                type="text"
                id="phone"
                autoComplete="phone"
                className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
                placeholder="숫자만 입력해주세요"
                {...register("phone", {
                  required: "휴대폰 번호는 필수 입력입니다.",
                })}
              />
            </div>
            {errors.phone && <p className="text-xs text-red-500" role="alert">{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              이메일
            </label>
            <div className="flex mt-2">
              <input
                type="email"
                id="email"
                autoComplete="email"
                className="block p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
                placeholder="example@gmail.com"
                {...register("email", {
                  required: "이메일은 필수 입력입니다.",
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    message: "이메일 형식에 맞지 않습니다.",
                  },
                })}
              />
            </div>
            {errors.email && <p className="text-xs text-red-500" role="alert">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium">
              주소
            </label>
            <div className="flex mt-2">
              <Address />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 items-center gap-x-6">
          <button type="submit" className="bg-custom-green text-white sm:text-xs py-2 px-4 rounded mb-10" >
            가입하기
          </button>
        </div>
      </form >
    </div >
  )
}