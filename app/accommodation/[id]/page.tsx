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

        <Collapse title="편의 시설">
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
      <div className="divider my-10"></div>
      <section>
        <h3 className="text-2xl font-bold">객실 안내 및 예약</h3>
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <article key={`room-${index}`} className="my-8 flex items-center">
              <div className="relative w-[333px] h-[222px]">
                <Image
                  src={placeholder}
                  alt="사진"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="flex flex-col gap-8 ml-8">
                <div>
                  <h6 className="font-bold text-xl mb-4">별님동_백조</h6>
                  <div className="flex gap-8">
                    <p>
                      <span className="font-bold">체크인:</span>{' '}
                      <span>14시</span>
                    </p>
                    <p>
                      <span className="font-bold">체크아웃:</span>{' '}
                      <span>10시</span>
                    </p>
                    <p>
                      <span className="font-bold">기본인원:</span>{' '}
                      <span>2명</span>
                    </p>
                    <p>
                      <span className="font-bold">최대인원:</span>{' '}
                      <span>4명</span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-8">
                  <p className="text-3xl font-bold">40,000원</p>
                  <button className="btn w-40 h-14 bg-blue-400 text-white hover:bg-blue-500">
                    예약하기
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
