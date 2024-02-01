import { IconContext } from 'react-icons';
import { GoStar, GoStarFill } from 'react-icons/go';

export default function RatingStar({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <div
      className={
        'relative w-20 flex gap-1' + (className ? ' ' + className : '')
      }>
      <div className="flex">
        <IconContext.Provider value={{ className: 'text-zinc-300' }}>
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <GoStar key={`star-${id}-${starIndex}`} />
          ))}
        </IconContext.Provider>
      </div>

      {/* TODO: get rate and apply to width */}
      <div className="flex absolute top-0 left-0 overflow-hidden w-[88%]">
        <IconContext.Provider value={{ className: 'text-amber-300 flex-none' }}>
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <GoStarFill key={`star-${id}-${starIndex}`} />
          ))}
        </IconContext.Provider>
      </div>

      <p className="font-normal text-xs text-zinc-700">4.1</p>
    </div>
  );
}
