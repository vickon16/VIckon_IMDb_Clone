import Image from 'next/image';
import React from 'react'
import { StarFilledIcon, StarOutlineIcon, TrailerPlayIcon, WatchListRibbon, WatchListRibbonIcon } from '../utils/svgs';
import { darkBtn } from '../utils/commonStyle';
import {WatchRibbonGroup} from "./"

const imgBaseURL = "https://image.tmdb.org/t/p/";
const imgSize = "w500";

const MoviesContainer = ({movieResults = [], containerRef}) => {

  return (
    <div
      ref={containerRef}
      className="movie-card-wrapper relative flex gap-x-4 gap-y-6 overflow-x-scroll w-full max-w-fit scroll-smooth mb-8"
    >
      {movieResults?.map((movie) => (
        <article
          key={movie.id}
          className="movie-card group mt-4 relative cursor-pointer max-w-[200px] hover:opacity-80 duration-300 transition-opacity"
        >
          <div className="card-top relative w-[200px] h-[300px]">
            {/* ribbon Group */}
            <WatchRibbonGroup
              className={`absolute top-0 left-[-8px] flex items-center justify-center text-white opacity-90 hover:opacity-100`}
            />
            {/* image */}
            <Image
              src={imgBaseURL + imgSize + movie?.poster_path}
              alt="card-img"
              className="w-full h-full object-cover "
              width="200"
              height="300"
              placeholder="blur"
              blurDataURL="/images/blur-img.jpg"
            />
          </div>

          <div className="card-bottom flex flex-col p-2 bg-bgDark2 gap-y-1">
            <p className="flex items-center gap-x-3">
              <span className="flex items-center gap-x-2 text-bgWhite2">
                <StarFilledIcon className="fill-btnYellow" />
                {movie.vote_average.toFixed(1)}
              </span>
              <span>
                <StarOutlineIcon className="fill-blue-400 px-5 py-3 rounded-md box-content hover:bg-bgDark3" />
              </span>
            </p>
            <p className="line-clamp-2 text-clampXs hover:underline text-bgWhite" >
              {movie?.original_title || movie?.title || movie?.original_name || "No title"}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique harum reprehenderit quia at rem ad esse, culpa fugiat doloremque voluptate accusamus id placeat nesciunt possimus ut animi est. Dolores temporibus ad iste rerum soluta deleniti quaerat aliquid laudantium eos sapiente!
            </p>

            <button className={`${darkBtn} !bg-bgDark3 !w-full rounded-sm`}>
              Watch now
            </button>

            <button className="flex items-center text-white gap-x-2 mt-2 mb-1 text-base self-center hover:bg-bgDark3 px-4 py-2 rounded-sm">
              <TrailerPlayIcon />
              Trailer
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default MoviesContainer