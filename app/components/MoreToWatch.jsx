import React from 'react'
import HeadingTitle from './HeadingTitle'

const MoreToWatch = () => {
  return (
    <section>
      <HeadingTitle
        subTitle="More to watch"
        paragraphText="IMDb helps you select the perfect next show or movie to watch."
      />

      <div className="watch-buttons flex items-center mt-8 gap-x-8 flex-wrap">
        <button className="w-[280px] dark:border-white border-2 py-[0.4em] font-semibold outline-none dark:hover:bg-bgDark2 transition-colors duration-300">
          Watch Guide
        </button>
        <button className="w-[280px] dark:border-white border-2 py-[0.4em] font-semibold outline-none dark:hover:bg-bgDark2 transition-colors duration-300">
          Most Popular
        </button>
      </div>
    </section>
  );
}

export default MoreToWatch