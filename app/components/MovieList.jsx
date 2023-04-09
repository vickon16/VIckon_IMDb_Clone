"use client"

import Image from 'next/image'
import React, { useRef} from 'react';
import { ChevronLeft, ChevronRight, ListIcon } from '../utils/svgs';
import { chevronStyle } from '../utils/commonStyle';
import HeadingTitle from './HeadingTitle';

const MovieList = ({title, moviesArr}) => {
  const rowContainer = useRef();

  const scroll = (offset) => {
    rowContainer.current.scrollLeft += offset
  }
  
  return (
    <section className="movie-list-container mt-8 relative">
      <HeadingTitle title={title} />

      <div className={`left-chevron-wrapper top-[40%] left-0 ${chevronStyle}`}>
        <ChevronLeft
          className="group-hover:text-amber-400 text-white"
          onClick={() => scroll(-400)}
          width="20"
          height="20"
        />
      </div>

      <div
        className={`right-chevron-wrapper ${chevronStyle} top-[40%] right-0`}
      >
        <ChevronRight
          className="group-hover:text-amber-400 text-white"
          onClick={() => scroll(400)}
          width="20"
          height="20"
        />
      </div>

      {/* movie list cards */}
      <div
        ref={rowContainer}
        className="movie-card-wrapper relative flex gap-x-4 gap-y-6 overflow-x-scroll w-full max-w-fit scroll-smooth"
      >
        {moviesArr?.map((movie) => (
          <article
            key={movie.id}
            className="movie-card group mt-4 relative cursor-pointer"
          >
            <div className="card-top relative w-[300px] h-[180px] sm:w-[400px] sm:h-[230px]">
              {/* black overlay */}
              <div className="black-overlay absolute bottom-0 left-0 right-0 w-full h-[200px]"></div>

              {/* image */}
              <Image
                src={movie.src}
                alt="card-img"
                className="!w-full !h-full object-cover"
                width="400"
                height="230"
                placeholder="blur"
                blurDataURL="/images/blur-img.jpg"
              />

              <div className="flex items-center gap-x-2 absolute bottom-0 left-3">
                <ListIcon
                  width="28"
                  height="28"
                  className="group-hover:text-btnYellow"
                />
                <p>List</p>
              </div>
            </div>

            <p className="text-clampSm hover:underline my-4">{movie.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MovieList