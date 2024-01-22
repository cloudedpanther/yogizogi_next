import { Category, Sort } from './constants';

export type CategoryType = (typeof Category)[keyof typeof Category];

export type SortType = (typeof Sort)[keyof typeof Sort];
