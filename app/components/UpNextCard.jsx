/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import { PlayBtn } from '../utils/svgs'

const UpNextCard = ({
  src = "/images/short.1.jpg",
  title = "no-title",
  duration = "0.0",
  bg = false,
}) => {
  return (
    <article
      className={`${
        bg ? "bg-bgWhite1 dark:bg-bgDark2 bg-opacity-50" : ""
      } group px-3 pt-5 flex gap-x-4 cursor-pointer`}
    >
      <aside className="img-wrapper">
        <div className='w-[90px] h-[130px]'>
          <Image src={src} alt="up-next-img" width="130" height="90" className='w-full h-full object-cover' placeholder='blur' blurDataURL='/images/blur-img.jpg' />
        </div>
      </aside>
      <aside className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <PlayBtn
            width="30"
            height="30"
            className="group-hover:text-amber-400"
          />
          <p className="text-clampXs text-gray-400">{duration}</p>
        </div>
        <h3>{title}</h3>
        <p className="text-clampXs text-gray-400 ">Watch Now</p>
      </aside>
    </article>
  );
};

export default UpNextCard