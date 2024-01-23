/* STYLES */

export const FormSectionStyle =
  'flex items-center border-2 rounded-lg px-4 h-20 relative';

export const FormSectionLegendStyle =
  'text-zinc-400 text-[10px] font-bold ml-1 absolute bg-white -top-2 -left-2';

const BasicSelectStyle =
  'h-10 rounded-lg bg-white hover:bg-zinc-100 shadow font-extrabold cursor-pointer flex justify-center items-center has-[:checked]:border-[3px] has-[:checked]:hover:bg-white';

export const CategoryStyle = `${BasicSelectStyle} w-14 has-[:checked]:text-blue-500 has-[:checked]:border-blue-400`;

export const SortStyle = `${BasicSelectStyle} w-20 has-[:checked]:text-amber-500 has-[:checked]:border-amber-400`;

export const PriceStyle =
  'border-2 h-10 rounded-lg text-zinc-400 text-end focus:outline-none w-full px-4';

const BasicButtonStyle = 'w-24 h-9 rounded-lg cursor-pointer';

export const SubmitButtonStyle = `${BasicButtonStyle} bg-zinc-300 border-2 border-zinc-500 hover:bg-zinc-400`;

export const ResetButtonStyle = `${BasicButtonStyle} bg-white border-2 border-zinc-300 hover:bg-zinc-200`;

//
//
//

/* LITERALS */

export const CATEGORY = [
  {
    value: 'ALL',
    text: '전체',
  },
  {
    value: 'HOTEL',
    text: '호텔',
  },
  {
    value: 'MOTEL',
    text: '모텔',
  },
  {
    value: 'COTTAGE',
    text: '펜션',
  },
] as const;

export const SORT = [
  {
    value: 'RATE',
    text: '별점순',
  },
  {
    value: 'LOW_PRICE',
    text: '낮은 가격순',
  },
  {
    value: 'HIGH_PRICE',
    text: '높은 가격순',
  },
] as const;

export const MIN_PRICE = 0;

export const MAX_PRICE = 1000000;
