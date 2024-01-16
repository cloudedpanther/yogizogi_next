'use client';

import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { LoginInputs, useLoginForm } from './hooks/useLoginForm';
import Link from 'next/link';

export default function Login() {
  const { Email, Password, methods } = useLoginForm();

  const onValid: SubmitHandler<LoginInputs> = (data) => {
    // TODO: change to login api request
    console.log(data);
  };

  const onInValid: SubmitErrorHandler<LoginInputs> = (errors) => {
    const errorMessage = Object.values(errors)[0].message;

    // TODO: change to modal popup
    console.log('error: ', errorMessage);
  };

  return (
    <div className="w-full h-[calc(100vh-68px)] flex flex-col gap-4 justify-center items-center">
      <h2 className="text-2xl font-bold">로그인</h2>
      <form
        onSubmit={methods.handleSubmit(onValid, onInValid)}
        className="shadow rounded-xl p-8 flex flex-col gap-4 w-[500px]">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm ml-1 text-slate-600">
            Email
          </label>
          <input
            {...Email}
            type="email"
            id="email"
            placeholder="이메일을 입력해주세요."
            className="input border border-slate-300 w-full focus:outline-none focus-within:outline-none h-12"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm ml-1 text-slate-600">
            Password
          </label>
          <input
            {...Password}
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
            className="input border border-slate-300 w-full focus:outline-none focus-within:outline-none h-12"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn bg-slate-900 text-white hover:text-black"
        />
      </form>
      <Link href="/join" className="text-xs text-slate-400 underline mt-2">
        <p>아직 회원이 아니신가요?</p>
      </Link>
    </div>
  );
}
