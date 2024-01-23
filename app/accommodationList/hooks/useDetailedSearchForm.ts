'use client';

import { useController, useForm } from 'react-hook-form';
import {
  CategoryElement,
  SortElement,
  MAX_PRICE,
  MIN_PRICE,
} from '../constants';
import { CategoryType, SortType } from '../types';
import { PRICE_ERROR_MESSAGE, PRICE_ORDER_ERROR_MESSAGE } from './errorMessage';

export type DetailedSearchInputs = {
  Category: CategoryType;
  Sort: SortType;
  MinPrice: number;
  MaxPrice: number;
};

export const useDetailedSearchForm = () => {
  const methods = useForm<DetailedSearchInputs>({
    defaultValues: {
      Category: CategoryElement.ALL.value,
      Sort: SortElement.RATE.value,
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
    rules: {
      min: {
        value: MIN_PRICE,
        message: PRICE_ERROR_MESSAGE,
      },
      max: {
        value: MAX_PRICE,
        message: PRICE_ERROR_MESSAGE,
      },
    },
  });

  const { field: MaxPrice } = useController({
    name: 'MaxPrice',
    control: methods.control,
    rules: {
      min: {
        value: MIN_PRICE,
        message: PRICE_ERROR_MESSAGE,
      },
      max: {
        value: MAX_PRICE,
        message: PRICE_ERROR_MESSAGE,
      },
      validate: (value) => MinPrice.value <= value || PRICE_ORDER_ERROR_MESSAGE,
    },
  });

  return {
    Category,
    Sort,
    MinPrice,
    MaxPrice,
    methods,
  };
};
