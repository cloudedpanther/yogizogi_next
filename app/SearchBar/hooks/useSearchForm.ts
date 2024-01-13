'use client';

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
    rules: { required: true },
  });

  const { field: StartDate } = useController({
    name: 'StartDate',
    control: methods.control,
    rules: { required: true },
  });

  const { field: EndDate } = useController({
    name: 'EndDate',
    control: methods.control,
    rules: { required: true },
  });

  const { field: People } = useController({
    name: 'People',
    control: methods.control,
    rules: { required: true },
  });

  return {
    Keyword,
    StartDate,
    EndDate,
    People,
    methods,
  };
};
