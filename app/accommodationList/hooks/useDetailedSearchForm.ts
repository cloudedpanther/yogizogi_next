'use client';

import { useController, useForm } from 'react-hook-form';
import { CategoryFactor, MAX_PRICE, MIN_PRICE, SortFactor } from '../constants';
import { CategoryType, SortType } from '../types';

export type DetailedSearchInputs = {
  Category: CategoryType;
  Sort: SortType;
  MinPrice: number;
  MaxPrice: number;
};

export const useDetailedSearchForm = () => {
  const methods = useForm<DetailedSearchInputs>({
    defaultValues: {
      Category: CategoryFactor.ALL,
      Sort: SortFactor.RATE,
      MinPrice: MIN_PRICE,
      MaxPrice: MAX_PRICE,
    },
  });

  const { field: Category } = useController({
    name: 'Category',
    control: methods.control,
    rules: {},
  });

  const { field: Sort } = useController({
    name: 'Sort',
    control: methods.control,
    rules: {},
  });

  const { field: MinPrice } = useController({
    name: 'MinPrice',
    control: methods.control,
    rules: {},
  });

  const { field: MaxPrice } = useController({
    name: 'MaxPrice',
    control: methods.control,
    rules: {},
  });

  return {
    Category,
    Sort,
    MinPrice,
    MaxPrice,
    methods,
  };
};
