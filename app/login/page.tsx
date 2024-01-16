'use client';

import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { LoginInputs, useLoginForm } from './hooks/useLoginForm';

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
      <h2 className="text-center text-2xl font-bold">로그인</h2>
      <form
        onSubmit={methods.handleSubmit(onValid, onInValid)}
        className="shadow rounded-xl p-4 flex flex-col gap-2 w-80">
        <input
          {...Email}
          type="email"
          placeholder="이메일을 입력해주세요."
          className="input border border-slate-300 w-full focus:outline-none focus-within:outline-none h-12"
        />
        <input
          {...Password}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          className="input border border-slate-300 w-full focus:outline-none focus-within:outline-none h-12"
        />
      </form>
    </div>
  );
}
