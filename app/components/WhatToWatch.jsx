import React from 'react'
import { ChevronRight, WatchListRibbon, WatchListRibbonIcon } from '../utils/svgs';
import { darkBtn, listBtn } from '../utils/commonStyle';
import HeadingTitle from './HeadingTitle';
import {WatchRibbonGroup} from '.';

const WhatToWatch = () => {
  return (
    <section className="flex flex-col gap-y-6 mb-12">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h1 className="text-clampLg text-amber-600 dark:text-btnYellow leading-loose font-bold">
          What to watch
        </h1>
        <a
          href="/"
          className="text-md text-blue-500 font-semibold flex items-center"
        >
          Get more recommendations{" "}
          <ChevronRight width="13" height="13" className="ml-1" />
        </a>
      </div>

      <HeadingTitle subTitle="From your Watchlist" icon={true} />

      {/* center watchlist div */}
      <div className="flex flex-col items-center text-center font-semibold gap-y-2">
        {/* //watchlist ribbons */}
        <WatchRibbonGroup
          className={`flex items-center fill-bgDark2 justify-center text-white opacity-90 hover:opacity-100`} />

        <p>Sign in to access your Watchlist</p>
        <p>Save shows and movies to keep track of what you want to watch.</p>
        <button className={`${darkBtn} bg-bgWhite1 dark:bg-bgDark2 `}>
          Sign in to IMDb
        </button>
      </div>
    </section>
  );
}

export default WhatToWatch