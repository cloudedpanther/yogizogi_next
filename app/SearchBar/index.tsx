'use client';

import { useSearchForm } from './hooks/useSearchForm';

export const SearchBar = () => {
  const { Keyword, StartDate, EndDate, People, methods } = useSearchForm();

  const onSubmit = () => console.log(methods.watch());

  const addPeople = () => {
    if (People.value >= 8) return;

    People.onChange(People.value + 1);
  };

  const subPeople = () => {
    if (People.value <= 0) return;

    People.onChange(People.value - 1);
  };

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className="w-[800px] h-[120px] shadow flex items-center justify-between rounded-xl px-4">
      <div>
        <p className="font-bold mb-2 ml-1 text-slate-600">지역</p>
        <input
          {...Keyword}
          type="text"
          placeholder="목적지를 입력해주세요"
          className="input border border-slate-300 w-60 max-w-xs focus:outline-none focus-within:outline-none h-12"
        />
      </div>
      <div>
        <p className="font-bold mb-2 ml-1 text-slate-600">기간</p>
        <div className="flex items-center gap-2 h-12">
          <input
            {...StartDate}
            type="date"
            className="border border-slate-300 rounded-lg h-12 pr-2 w-32 text-end"
          />
          <p>~</p>
          <input
            {...EndDate}
            type="date"
            className="border border-slate-300 rounded-lg h-12 pr-2 w-32 text-end"
          />
        </div>
      </div>
      <div>
        <p className="font-bold mb-2 ml-1 text-slate-600">인원</p>
        <div className="h-12 flex items-center">
          <button
            onClick={subPeople}
            className="btn btn-sm bg-white border border-slate-300">
            -
          </button>
          <input
            {...People}
            type="number"
            readOnly
            className="w-6 text-center ml-3"
          />
          <button
            onClick={addPeople}
            className="btn btn-sm bg-black text-white hover:text-black">
            +
          </button>
        </div>
      </div>
      <div className="h-20 flex items-end">
        <input type="submit" className="btn" value="검색" />
      </div>
    </form>
  );
};
