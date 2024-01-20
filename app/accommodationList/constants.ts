export const FormSectionStyle =
  'flex flex-col gap-2 border-2 rounded-lg p-4 relative';

export const FormSectionLegendStyle =
  'text-zinc-400 text-xs font-bold ml-1 absolute bg-white -top-2 -left-2';

const BasicButtonStyle =
  'h-14 rounded-lg bg-white hover:bg-zinc-100 shadow font-bold cursor-pointer flex justify-center items-center has-[:checked]:border-[3px] has-[:checked]:hover:bg-white';

export const CategoryStyle = `${BasicButtonStyle} w-16 has-[:checked]:text-blue-500 has-[:checked]:border-blue-400`;

export const SortStyle = `${BasicButtonStyle} w-32 has-[:checked]:text-amber-500 has-[:checked]:border-amber-400`;
