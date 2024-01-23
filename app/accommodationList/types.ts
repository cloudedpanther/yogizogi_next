import { CATEGORY, SORT } from './constants';

export type CategoryType = (typeof CATEGORY)[number]['value'];

export type SortType = (typeof SORT)[number]['value'];
