import Image from 'next/image';
import placeholder from '/public/images/placeholder.png';

export default function Accommodation({ params }: { params: { id: string } }) {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <section className="w-[1024px] h-[456px] grid grid-cols-3 grid-rows-2 gap-2">
        <article className="col-span-2 row-span-2 relative">
          <Image
            src={placeholder}
            alt="사진"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </article>
        <article className="relative">
          <Image
            src={placeholder}
            alt="사진"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </article>
        <article className="relative">
          <Image
            src={placeholder}
            alt="사진"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </article>
      </section>
    </div>
  );
}
