'use client';

import Image from 'next/image';
import placeholder from '/public/images/placeholder.png';
import RatingStar from '@/app/RatingStar';
import { BsGeoAlt } from 'react-icons/bs';
import Collapse from './Collapse';

export default function Accommodation({ params }: { params: { id: string } }) {
  return (
    <div className="w-[1024px] h-[2000px] mt-10 mx-auto">
      <section className="w-full h-[400px] grid grid-cols-3 grid-rows-2 gap-2">
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
      <section className="my-10">
        <h2 className="font-bold text-3xl">무슨무슨 멋진 호텔</h2>
        <div className="flex items-center gap-2 mt-4">
          <BsGeoAlt className="text-xl" />
          <p>서울 어디어디 주소 873-1</p>
          <div className="flex gap-2 items-center ml-8">
            <p>평점:</p>
            <RatingStar id={'호텔 이름'} />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        {/* TODO: place fetched information */}
        <Collapse title="기본정보" open>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            corporis pariatur temporibus culpa soluta rerum quae laborum iste,
            id rem! Laudantium numquam reiciendis quos, atque nisi quo libero
            voluptates placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            corporis pariatur temporibus culpa soluta rerum quae laborum iste,
            id rem! Laudantium numquam reiciendis quos, atque nisi quo libero
            voluptates placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            corporis pariatur temporibus culpa soluta rerum quae laborum iste,
            id rem! Laudantium numquam reiciendis quos, atque nisi quo libero
            voluptates placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            corporis pariatur temporibus culpa soluta rerum quae laborum iste,
            id rem! Laudantium numquam reiciendis quos, atque nisi quo libero
            voluptates placeat.
          </p>
        </Collapse>

        <Collapse title="판매자 정보">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            corporis pariatur temporibus culpa soluta rerum quae laborum iste,
            id rem! Laudantium numquam reiciendis quos, atque nisi quo libero
            voluptates placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            corporis pariatur temporibus culpa soluta rerum quae laborum iste,
            id rem! Laudantium numquam reiciendis quos, atque nisi quo libero
            voluptates placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            corporis pariatur temporibus culpa soluta rerum quae laborum iste,
            id rem! Laudantium numquam reiciendis quos, atque nisi quo libero
            voluptates placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            corporis pariatur temporibus culpa soluta rerum quae laborum iste,
            id rem! Laudantium numquam reiciendis quos, atque nisi quo libero
            voluptates placeat.
          </p>
        </Collapse>
      </section>
    </div>
  );
}
