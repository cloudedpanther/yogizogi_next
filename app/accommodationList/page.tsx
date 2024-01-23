'use client';

import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import {
  CATEGORY,
  CategoryStyle,
  FormSectionLegendStyle,
  FormSectionStyle,
  PriceStyle,
  ResetButtonStyle,
  SORT,
  SortStyle,
  SubmitButtonStyle,
} from './constants';
import {
  DetailedSearchInputs,
  useDetailedSearchForm,
} from './hooks/useDetailedSearchForm';

export default function AccommodationList() {
  const { Category, Sort, MinPrice, MaxPrice, methods } =
    useDetailedSearchForm();

  const onValid: SubmitHandler<DetailedSearchInputs> = (data) => {
    // TODO: change to detailed search request
    console.log(data);
  };

  const onInValid: SubmitErrorHandler<DetailedSearchInputs> = (errors) => {
    const errorMessage = Object.values(errors)[0].message;

    // TODO: change to modal popup
    console.log('error: ', errorMessage);
  };

  const handleReset = () => methods.reset();

  return (
    <div className="w-[1024px] mx-auto flex flex-col gap-4">
      {/* 상세 검색 */}
      <form
        onSubmit={methods.handleSubmit(onValid, onInValid)}
        className="mt-4 shadow rounded-xl p-4 flex items-center gap-2 text-xs font-bold">
        <section className={FormSectionStyle}>
          <p className={FormSectionLegendStyle}>카테고리</p>
          <div className="flex gap-2">
            {CATEGORY.map((category) => (
              <label key={category.value} className={CategoryStyle}>
                <p>{category.text}</p>
                <input
                  {...Category}
                  type="radio"
                  value={category.value}
                  className="hidden"
                  checked={category.value === Category.value}
                />
              </label>
            ))}
          </div>
        </section>

        <section className={FormSectionStyle}>
          <p className={FormSectionLegendStyle}>정렬</p>
          <div className="flex gap-2">
            {SORT.map((sort) => (
              <label key={sort.value} className={SortStyle}>
                <p>{sort.text}</p>
                <input
                  {...Sort}
                  type="radio"
                  value={sort.value}
                  className="hidden"
                  checked={sort.value === Sort.value}
                />
              </label>
            ))}
          </div>
        </section>

        <section className={FormSectionStyle}>
          <p className={FormSectionLegendStyle}>가격 범위</p>
          <div className="flex gap-2 items-center">
            <input {...MinPrice} type="number" className={PriceStyle} />
            <p className="text-zinc-300">~</p>
            <input {...MaxPrice} type="number" className={PriceStyle} />
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <input type="submit" value="검색" className={SubmitButtonStyle} />
          <input
            type="button"
            value="초기화"
            className={ResetButtonStyle}
            onClick={handleReset}
          />
        </section>
      </form>

      {/* 숙소 목록 */}
      <section className="w-full min-h-[500px] shadow rounded-xl"></section>
    </div>
  );
}
