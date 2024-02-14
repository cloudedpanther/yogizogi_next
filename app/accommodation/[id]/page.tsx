'use client';

import Image from 'next/image';
import placeholder from '/public/images/placeholder.png';
import RatingStar from '@/app/RatingStar';
import { BsGeoAlt } from 'react-icons/bs';
import Collapse from './Collapse';
import { useState } from 'react';

export default function Accommodation({ params }: { params: { id: string } }) {
  const [comments, setComments] = useState([1]);
  const page = 0;
  const pageSize = 10;
  const totalComments = 36;

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
            <RatingStar id={'호텔 이름'} rate={4.1} fontSize={14} />
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
                      <span className="font-bold">체크인:</span>
                      <span className="ml-4">{`14시`}</span>
                    </p>
                    <p>
                      <span className="font-bold">체크아웃:</span>
                      <span className="ml-4">{`10시`}</span>
                    </p>
                    <p>
                      <span className="font-bold">기본인원:</span>
                      <span className="ml-4">{`2명`}</span>
                    </p>
                    <p>
                      <span className="font-bold">최대인원:</span>
                      <span className="ml-4">{`4명`}</span>
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
      <section className="my-20 py-16 border-y-2 border-zinc-200">
        <h5 className="text-2xl font-bold mb-10">리뷰</h5>
        <div className="flex items-center h-20">
          <p className="text-3xl flex gap-3 mx-20">
            <span className="font-bold text-red-400">9.7</span>
            <span>/</span>
            <span>10</span>
            <span>점</span>
          </p>
          <div className="divider divider-horizontal"></div>
          <div className="text-center mx-32">
            <p className="text-3xl font-bold mb-4">Outstanding</p>
            <p>{`30개의 확인된 리뷰가 있습니다.`}</p>
          </div>
        </div>
      </section>

      {/* Maybe turn in to page */}
      <section className="pb-20 flex flex-col gap-4">
        {!comments.length ? (
          <p className="text-center text-xl">아직 댓글이 없습니다.</p>
        ) : (
          <>
            {Array.from({ length: pageSize }).map((_, index) => {
              return (
                <article
                  key={`comment-${index}`}
                  className="w-full border border-zinc-200 rounded-lg p-4 flex flex-col gap-4">
                  <h6 className="font-bold">대상혁</h6>
                  <div className="flex items-center gap-4">
                    <p className="font-bold">평점:</p>
                    <RatingStar
                      id={`comment-${index}`}
                      rate={4.1}
                      fontSize={16}
                    />
                  </div>
                  <p>너무 좋았어요!</p>
                </article>
              );
            })}

            <div className="mx-auto mt-6">
              {Array.from({ length: Math.ceil(totalComments / pageSize) }).map(
                (_, index) => {
                  return (
                    <button
                      key={`pageButton-${index}`}
                      className={
                        'btn btn-sm bg-white border-white shadow-none text-zinc-400 hover:bg-zinc-100 hover:border-zinc-100' +
                        (page === index ? ' text-black' : '')
                      }>
                      {index + 1}
                    </button>
                  );
                },
              )}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
