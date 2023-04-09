import {
  ExploreMovies,
  FansFavorite,
  Footer,
  Header,
  HomeBanner,
  MoreToWatch,
  MovieList,
  WhatToWatch,
} from "./components";
import { container } from "./utils/commonStyle";
import MovieListData from "./utils/movieListData.json";
import {Suspense} from "react"
import { Loader } from "./utils/svgs";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getMovies = async (page) => {
  const resp = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&langauge=en-US&page=${page}`, {
    next : {revalidate : 100000}
  });

   if (!resp.ok) {
     // This will activate the closest `error.js` Error Boundary
     throw new Error("Failed to fetch data");
   }

   return resp.json();
}

export default async function Home() {
  const trendingData1 = await getMovies(1);
  const trendingData2 = await getMovies(2);

  const [page1Data, page2Data] = await Promise.all([trendingData1, trendingData2]);

  return (
    <>
      <Header />
      <section className="home-wrapper min-h-[70vh]" id="home">
        <div className={`${container} py-2 flex flex-col gap-y-10`}>
            <HomeBanner movieResults={page1Data?.results} />
            <MovieList
              title={"Featured Today"}
              moviesArr={MovieListData.featured}
            />
            <WhatToWatch />
            <FansFavorite
              movieResults={page1Data?.results}
              subTitle="Fans favorites"
              icon={true}
              paragraphText="This week's top TV and movies"
            />
            <MoreToWatch />
            <ExploreMovies moviesArr={MovieListData.topOfficeData} />
            <FansFavorite
              movieResults={page2Data?.results}
              title="What to watch"
              subTitle="Top picks"
              icon={true}
              paragraphText="TV shows and movies just for you"
            />
        </div>
      </section>
      <Footer />
    </>
  );
}
