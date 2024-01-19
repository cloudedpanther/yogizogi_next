import { CategoryStyle } from './constants';

export default function AccommodationList() {
  return (
    <div className="w-[1024px] mx-auto">
      <form className="mt-4">
        <section className="flex gap-2">
          <label htmlFor="all" className={CategoryStyle}>
            <p>전체</p>
          </label>
          <label htmlFor="hotel" className={CategoryStyle}>
            <p>호텔</p>
          </label>
          <label htmlFor="motel" className={CategoryStyle}>
            <p>모텔</p>
          </label>
          <label htmlFor="cottage" className={CategoryStyle}>
            <p>펜션</p>
          </label>
          <>
            <input type="radio" name="category" id="all" className="hidden" />
            <input type="radio" name="category" id="hotel" className="hidden" />
            <input type="radio" name="category" id="motel" className="hidden" />
            <input
              type="radio"
              name="category"
              id="cottage"
              className="hidden"
            />
          </>
        </section>
      </form>
      <section>숙소 목록</section>
    </div>
  );
}
