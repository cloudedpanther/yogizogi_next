import {
  CategoryStyle,
  FormSectionLegendStyle,
  FormSectionStyle,
  SortStyle,
} from './constants';

export default function AccommodationList() {
  return (
    <div className="w-[1024px] mx-auto flex flex-col gap-4">
      {/* 상세 검색 */}
      <form className="mt-4 shadow rounded-xl p-4 grid grid-cols-2 gap-2">
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
      </form>

      {/* 숙소 목록 */}
      <section className="w-full min-h-[500px] shadow rounded-xl"></section>
    </div>
  );
}
