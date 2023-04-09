import React from "react";
import HeadingTitle from "./HeadingTitle";
import WatchRibbonGroup from "./WatchRibbonGroup";

const ExploreMovies = ({ moviesArr = [] }) => {
  return (
    <section>
      <HeadingTitle
        title="Explore Movies & TV shows"
        subTitle="Top box office (US)"
        icon={true}
        paragraphText="Weekend of March 31-April 2"
      />

      <div className="office-container flex items-center flex-wrap gap-x-4 gap-y-6 my-8">
        <aside className="explore-left w-full sm:flex-1 flex flex-col gap-y-4 [&>*:nth-child(even)]:bg-gradient-to-r from-darkGradientBottom to-darkGradientTop">
          {moviesArr &&
            moviesArr
              .slice(0, moviesArr.length > 3 ? 3 : moviesArr.length)
              ?.map((movie) => (
                <article
                  key={movie.id}
                  className="flex items-center gap-x-1 p-2 cursor-pointer"
                >
                  <span className="px-2 border-r-btnYellow border-r-[1px]">
                    {movie.id}
                  </span>

                  <WatchRibbonGroup
                    className={`flex items-center fill-bgDark2 justify-center text-white opacity-90 hover:opacity-100`}
                  />

                  <div>
                    <p className="text-clampSm">{movie.title}</p>
                    <p className="text-gray-400 text-sm py-1">${movie.price}</p>
                  </div>
                </article>
              ))}
        </aside>

        <aside className="explore-left w-full sm:flex-1 flex flex-col gap-y-4 [&>*:nth-child(odd)]:bg-gradient-to-r from-darkGradientBottom to-darkGradientTop">
          {moviesArr &&
            moviesArr.length > 3 &&
            moviesArr
              .slice(3, moviesArr.length > 6 ? 6 : moviesArr.length)
              ?.map((movie) => (
                <article
                  key={movie.id}
                  className="flex items-center gap-x-1 p-2 cursor-pointer"
                >
                  <span className="p-2">{movie.id}</span>

                  <WatchRibbonGroup
                    className={`flex items-center fill-bgDark2 justify-center text-white opacity-90 hover:opacity-100`}
                  />

                  <div>
                    <p className="text-clampSm">{movie.title}</p>
                    <p className="text-gray-400 text-sm py-1">${movie.price}</p>
                  </div>
                </article>
              ))}
        </aside>
      </div>
    </section>
  );
};

export default ExploreMovies;
