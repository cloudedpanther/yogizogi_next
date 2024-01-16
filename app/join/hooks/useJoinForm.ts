'use client';

import { useController, useForm } from 'react-hook-form';

export type JoinInputs = {
  Name: string;
  Email: string;
  Password: string;
  PasswordCheck: string;
};

export const useJoinForm = () => {
  const methods = useForm<JoinInputs>({
    defaultValues: {
      Name: '',
      Email: '',
      Password: '',
      PasswordCheck: '',
    },
  });

  const { field: Name } = useController({
    name: 'Name',
    control: methods.control,
    rules: {
      required: '이름을 입력해주세요.',
      maxLength: 50,
    },
  });

  const { field: Email } = useController({
    name: 'Email',
    control: methods.control,
    rules: {
      required: '이메일을 입력해주세요.',
      pattern: {
        value: /^[\w\.0-9-]+@[\w]+\.[\w\.]{2,6}$/,
        message: '이메일 형식에 맞게 작성해주세요.',
      },
      maxLength: 50,
    },
  });

  const { field: Password } = useController({
    name: 'Password',
    control: methods.control,
    rules: {
      required: '비밀번호를 입력해주세요.',
      pattern: {
        value: /^[\w\!\@\#\$\%\^\&\*]{8,16}$/,
        message:
          '비밀번호는 8자 이상 16자 이하이며, 알파벳 대소문자 및 특수문자(!@#$%^&*) 중 한 가지 이상의 종류의 조합으로 이루어져 있습니다.',
      },
      minLength: {
        value: 8,
        message: '비밀번호는 8자 이상 16자 이하여야 합니다.',
      },
      maxLength: 16,
    },
  });

  const { field: PasswordCheck } = useController({
    name: 'PasswordCheck',
    control: methods.control,
    rules: {
      required: '비밀번호를 한 번 더 입력해주세요.',
      minLength: 8,
      maxLength: 16,
      validate: (value) =>
        Password.value === value || '비밀번호가 일치하지 않습니다.',
    },
  });

  return {
    Name,
    Email,
    Password,
    PasswordCheck,
    methods,
  };
};
