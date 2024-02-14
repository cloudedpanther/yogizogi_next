import { IconContext } from 'react-icons';
import { GoStar, GoStarFill } from 'react-icons/go';

export default function RatingStar({
  id,
  className,
  rate,
  fontSize = 12,
}: {
  id: string;
  className?: string;
  rate: number;
  fontSize?: number;
}) {
  return (
    <div
      className={'flex items-center' + (className ? ' ' + className : '')}
      style={{ gap: `${fontSize - 8}px` }}>
      <div className="relative" style={{ fontSize: `${fontSize + 2}px` }}>
        <div className="flex">
          <IconContext.Provider value={{ className: 'text-zinc-300' }}>
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <GoStar key={`star-${id}-${starIndex}`} />
            ))}
          </IconContext.Provider>
        </div>

        <div
          className={'flex top-0 left-0 overflow-hidden absolute'}
          style={{ width: `${(rate * 20).toFixed(0)}%` }}>
          <IconContext.Provider
            value={{ className: 'text-amber-300 flex-none' }}>
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <GoStarFill key={`star-${id}-${starIndex}`} />
            ))}
          </IconContext.Provider>
        </div>
      </div>

      <p
        className={`font-normal text-zinc-700`}
        style={{ fontSize: `${fontSize}px` }}>
        {rate.toFixed(1)}
      </p>
    </div>
  );
}
