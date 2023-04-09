/* eslint-disable react-hooks/exhaustive-deps */
"use client";

/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react'
import { ChevronLeft, ChevronRight, PlayBtn} from '../utils/svgs'
import UpNextCard from './UpNextCard';
import Link from 'next/link';
import { chevronStyle } from '../utils/commonStyle';
import {WatchRibbonGroup} from ".";
import Image from 'next/image';


const HomeBanner = ({movieResults}) => {
  const [index, setIndex] = useState(0);

  const movies = movieResults.map(items => (
    { poster_path : items.poster_path, 
      id : items.id,
      backdrop_path : items.backdrop_path,
      title : items.original_title || items.title || items.original_name || "No title",
    }
    ))

    useEffect(() => {
      const timer = setInterval(() => {
        if (movies.length - 1 === index) {
          setIndex(0)
        } else {
          setIndex(prev => prev + 1)
        }
      } , 10000);

      return () => clearInterval(timer);
    }, [index])

  const imgBaseURL = "https://image.tmdb.org/t/p/";
  const imgSize = "original";

  return (
    <section className=" flex flex-wrap lg:flex-nowrap gap-x-3 gap-y-8">
      <aside className={`left min-h-[60vh] w-full lg:flex-[2]`}>
        {/* banner Items */}
        <div className="relative w-full h-[550px]">
          {/* image */}
          <Image
            src={
              imgBaseURL +
              imgSize +
              (movies[index].poster_path ||
                movies[index].backdrop_path ||
                "/images/long.1.jpg")
            }
            alt="card-img"
            className="w-full h-full object-cover "
            width="800"
            height="800"
            placeholder="blur"
            blurDataURL="/images/blur-img.jpg"
          />
          {/* carousel buttons */}
          <div
            className={`left-chevron-wrapper top-[40%] left-0 ${chevronStyle}`}
          >
            <ChevronLeft
              height="20"
              width="20"
              className="group-hover:text-amber-400 text-white"
              onClick={() =>
                setIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1))
              }
            />
          </div>

          <div
            className={`right-chevron-wrapper ${chevronStyle} top-[40%] right-0`}
          >
            <ChevronRight
              width="20"
              height="20"
              className="group-hover:text-amber-400 text-white"
              onClick={() =>
                setIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1))
              }
            />
          </div>

          {/* bottom Meta */}
          <article className="absolute bottom-0 left-0 right-0 px-2 flex gap-x-4">
            {/* black overlay */}
            <div className="black-overlay absolute bottom-0 left-0 right-0 w-full h-[500px]"></div>

            {/* watchlist image */}
            <div className="image-wrapper w-[160px] h-[160px] hidden sm:flex relative z-[1]">
              {/* Ribbon Group */}
              <WatchRibbonGroup
                className={`absolute top-0 left-[-8px] flex items-center justify-center text-white opacity-90 hover:opacity-100`}
              />

              <Image
                src={
                  imgBaseURL +
                  imgSize +
                  (movies[index].backdrop_path ||
                    movies[index].poster_path ||
                    "/images/short.13.jpg")
                }
                alt="card-img"
                className="w-full h-auto object-cover "
                width="160"
                height="160"
                placeholder="blur"
                blurDataURL="/images/blur-img.jpg"
              />
            </div>

            {/* watchlist meta */}
            <div className="watchlist-meta self-end flex gap-x-4 sm:gap-x-6  z-[1] items-center text-white overflow-hidden">
              <PlayBtn width="70" height="70" />
              <div className="w-full">
                <h1 className="text-clampXl truncate w-full">
                  {movies[index].title}
                </h1>
                <p className="text-clampMd text-gray-400">Watch the Teaser</p>
              </div>
              <span className="text-clampMd text-gray-400">1.46</span>
            </div>
          </article>
        </div>
      </aside>

      <aside className="right w-full lg:flex-1">
        <h2 className="text-amber-600 dark:text-btnYellow font-bold text-clampSm mb-4">
          Up Next
        </h2>

        {/* card containers */}
        <div className="up-next-card-container px-2 flex flex-col gap-y-1">
          <UpNextCard
            src={
              imgBaseURL +
              imgSize +
              (movies[index + 1 >= movies.length - 1 ? 2 : index + 1]
                .poster_path ||
                movies[index + 1].backdrop_path ||
                "/images/short.14.jpg")
            }
            title={movies[index + 1 >= movies.length - 1 ? 2 : index + 1].title}
            duration="3.56"
            bg={true}
          />
          <UpNextCard
            src={
              imgBaseURL +
              imgSize +
              (movies[index + 2 >= movies.length - 1 ? 1 : index + 2]
                .poster_path ||
                movies[index + 2].backdrop_path ||
                "/images/short.15.jpg")
            }
            title={movies[index + 2 >= movies.length - 1 ? 1 : index + 2].title}
            duration="2.37"
          />
          <UpNextCard
            src={
              imgBaseURL +
              imgSize +
              (movies[index + 3 >= movies.length - 1 ? 0 : index + 3]
                .poster_path ||
                movies[index + 3].backdrop_path ||
                "/images/short.16.jpg")
            }
            title={movies[index + 3 >= movies.length - 1 ? 0 : index + 3].title}
            duration="3.29"
          />

          <Link
            href="/"
            className="text-clampSm mt-6 block hover:text-btnYellow font-bold"
          >
            Browse Trailers {">"}{" "}
          </Link>
        </div>
      </aside>
    </section>
  );
}

export default HomeBanner