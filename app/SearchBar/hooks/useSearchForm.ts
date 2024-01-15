'use client';

import { DateX } from '@/app/helps/DateX';
import { useController, useForm } from 'react-hook-form';

export type SearchInputs = {
  Keyword: string;
  StartDate: string;
  EndDate: string;
  People: number;
};

export const useSearchForm = () => {
  const methods = useForm<SearchInputs>({
    defaultValues: {
      Keyword: '',
      StartDate: '',
      EndDate: '',
      People: 0,
    },
  });

  const { field: Keyword } = useController({
    name: 'Keyword',
    control: methods.control,
    rules: {
      maxLength: 50,
    },
  });

  const { field: StartDate } = useController({
    name: 'StartDate',
    control: methods.control,
    rules: {
      required: '숙박 기간을 설정해주세요',
      min: new DateX().toString(),
    },
  });

  const { field: EndDate } = useController({
    name: 'EndDate',
    control: methods.control,
    rules: {
      required: '숙박 기간을 설정해주세요',
      max: new DateX().addYear(1).toString(),
    },
  });

  const { field: People } = useController({
    name: 'People',
    control: methods.control,
    rules: {
      required: '숙박 인원을 설정해주세요',
      min: {
        value: 1,
        message: '숙박 인원은 최소 한 명 이상이어야 합니다.',
      },
      max: {
        value: 8,
        message: '숙박 인원은 최대 여덟 명 이하여야 합니다.',
      },
    },
  });

  return {
    Keyword,
    StartDate,
    EndDate,
    People,
    methods,
  };
};
