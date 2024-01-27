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
import Image from 'next/image';
import placeholder from '/public/images/placeholder.png';
import { IconContext } from 'react-icons';
import { GoStarFill } from 'react-icons/go';
import { GoStar } from 'react-icons/go';
import Link from 'next/link';

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
      <section className="w-full min-h-[500px] grid grid-cols-3 gap-[12.5px]">
        {/* TODO: fetch data and CSR */}
        {Array.from({ length: 30 }).map((_, articleIndex) => (
          <article
            key={`article-${articleIndex}`}
            className="w-[333px] h-[370px] shadow rounded-xl">
            {/* TODO: place accommodationId in url */}
            <Link href={`/accommodation/:accommodationId`}>
              {/* TODO: fetch image (and use it as background maybe?) */}
              <Image
                src={placeholder}
                width={333}
                height={222}
                alt="placeholder"
                className="rounded-t-xl"
              />
              <div className="p-4 font-bold">
                <h4 className="text-lg">역삼 인트로 호텔</h4>
                <small className="text-xs font-normal text-zinc-500">
                  서울 강남구 테헤란로37길 13-11
                </small>
                <div className="relative w-20 flex gap-1 mt-2">
                  <div className="flex">
                    <IconContext.Provider
                      value={{ className: 'text-zinc-300' }}>
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <GoStar key={`star-${articleIndex}-${starIndex}`} />
                      ))}
                    </IconContext.Provider>
                  </div>

                  {/* TODO: get rate and apply to width */}
                  <div className="flex absolute top-0 left-0 overflow-hidden w-[88%]">
                    <IconContext.Provider
                      value={{ className: 'text-amber-300 flex-none' }}>
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <GoStarFill key={`star-${articleIndex}-${starIndex}`} />
                      ))}
                    </IconContext.Provider>
                  </div>

                  <p className="font-normal text-xs text-zinc-700">4.1</p>
                </div>
                <p className="text-end text-2xl">300,000원</p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
