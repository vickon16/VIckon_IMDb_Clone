"use client";

/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import HeadingTitle from "./HeadingTitle";
import { ChevronLeft, ChevronRight } from "../utils/svgs";
import { chevronStyle } from "../utils/commonStyle";
import movieListData from "../utils/movieListData.json";
import MoviesContainer from "./MoviesContainer";

const FansFavorite = ({movieResults, title, subTitle, paragraphText, icon}) => {
  const rowContainer = useRef();

  const scroll = (offset) => {
    rowContainer.current.scrollLeft += offset;
  };

  return (
    <section>
      <HeadingTitle
        title={title}
        subTitle={subTitle}
        icon={icon}
        paragraphText={paragraphText}
      />

      {/* favMovieCard wrapper */}
      <div className="fav-movies-wrapper w-full relative">
        <aside
          className={`left-chevron-wrapper top-[30%] left-0 ${chevronStyle}`}
        >
          <ChevronLeft
            className="group-hover:text-amber-400 text-white"
            onClick={() => scroll(-300)}
            width="20"
            height="20"
          />
        </aside>

        <aside
          className={`right-chevron-wrapper ${chevronStyle} top-[30%] right-0`}
        >
          <ChevronRight
            className="group-hover:text-amber-400 text-white"
            onClick={() => scroll(300)}
            width="20"
            height="20"
          />
        </aside>

        <MoviesContainer
          movieResults={movieResults}
          containerRef={rowContainer}
        />
      </div>
    </section>
  );
};

export default FansFavorite;
