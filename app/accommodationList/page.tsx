import {
  CategoryStyle,
  FormSectionLegendStyle,
  FormSectionStyle,
  PriceStyle,
  ResetButtonStyle,
  SortStyle,
  SubmitButtonStyle,
} from './constants';

export default function AccommodationList() {
  return (
    <div className="w-[1024px] mx-auto flex flex-col gap-4">
      {/* 상세 검색 */}
      <form className="mt-4 shadow rounded-xl p-4 flex items-center gap-2 text-xs font-bold">
        <section className={FormSectionStyle}>
          <p className={FormSectionLegendStyle}>카테고리</p>
          <div className="flex gap-2">
            <label htmlFor="all" className={CategoryStyle}>
              <p>전체</p>
              <input
                type="radio"
                name="category"
                id="all"
                className="hidden"
                checked
              />
            </label>
            <label htmlFor="hotel" className={CategoryStyle}>
              <p>호텔</p>
              <input
                type="radio"
                name="category"
                id="hotel"
                className="hidden"
              />
            </label>
            <label htmlFor="motel" className={CategoryStyle}>
              <p>모텔</p>
              <input
                type="radio"
                name="category"
                id="motel"
                className="hidden"
              />
            </label>
            <label htmlFor="cottage" className={CategoryStyle}>
              <p>펜션</p>
              <input
                type="radio"
                name="category"
                id="cottage"
                className="hidden"
              />
            </label>
          </div>
        </section>

        <section className={FormSectionStyle}>
          <p className={FormSectionLegendStyle}>정렬</p>
          <div className="flex gap-2">
            <label htmlFor="rate" className={SortStyle}>
              <p>별점순</p>
              <input
                type="radio"
                name="sort"
                id="rate"
                className="hidden"
                checked
              />
            </label>
            <label htmlFor="lowPrice" className={SortStyle}>
              <p>낮은 가격순</p>
              <input
                type="radio"
                name="sort"
                id="lowPrice"
                className="hidden"
              />
            </label>
            <label htmlFor="highPrice" className={SortStyle}>
              <p>높은 가격순</p>
              <input
                type="radio"
                name="sort"
                id="highPrice"
                className="hidden"
              />
            </label>
          </div>
        </section>

        <section className={FormSectionStyle}>
          <p className={FormSectionLegendStyle}>가격 범위</p>
          <div className="flex gap-2 items-center">
            {/* TODO: step, min, max, default/placeholder 설정  */}
            <input type="number" className={PriceStyle} />
            <p className="text-zinc-300">~</p>
            <input type="number" className={PriceStyle} />
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <input type="submit" value="검색" className={SubmitButtonStyle} />
          <input type="reset" value="초기화" className={ResetButtonStyle} />
        </section>
      </form>

      {/* 숙소 목록 */}
      <section className="w-full min-h-[500px] shadow rounded-xl"></section>
    </div>
  );
}
