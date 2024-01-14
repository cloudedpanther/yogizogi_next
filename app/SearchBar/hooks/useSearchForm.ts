'use client';

import { DateX } from '@/app/helps/DateX';
import { useController, useForm } from 'react-hook-form';

export const useSearchForm = () => {
  const methods = useForm({
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
      required: true,
      maxLength: 50,
    },
  });

  const { field: StartDate } = useController({
    name: 'StartDate',
    control: methods.control,
    rules: {
      required: true,
      min: new DateX().toString(),
    },
  });

  const { field: EndDate } = useController({
    name: 'EndDate',
    control: methods.control,
    rules: {
      required: true,
      max: new DateX().addYear(1).toString(),
    },
  });

  const { field: People } = useController({
    name: 'People',
    control: methods.control,
    rules: {
      required: true,
      min: 1,
      max: 8,
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
