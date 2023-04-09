import { FacebookIcon, InstagramIcon, TikTokIcon, TwitterIcon, YoutubeIcon } from '../utils/svgs'
import Link from 'next/link'
import React from 'react'
import { btn, container } from '../utils/commonStyle';

const listStyles = "text-clampXs font-normal hover:underline cursor-pointer";

const Footer = () => {
  return (
    <footer className="w-full mt-10">
      <div
        className={`footer-container flex flex-col items-center ${container} gap-y-12 sm:gap-y-9 py-6 font-semibold`}
      >
        <Link href="/signin" className={`${btn}`}>
          Sign in for more access
        </Link>

        <aside className="buttons flex items-center justify-between gap-x-6 sm:gap-x-10">
          <TwitterIcon className="cursor-pointer" />
          <TikTokIcon className="cursor-pointer" />
          <InstagramIcon className="cursor-pointer" />
          <FacebookIcon className="cursor-pointer" />
          <YoutubeIcon className="cursor-pointer" />
        </aside>

        <ul className="sect1 flex flex-wrap gap-x-5 sm:gap-x-8 gap-y-3 justify-center">
          <li className={`${listStyles}`}>Help</li>
          <li className={`${listStyles}`}>Get the IMDb App</li>
          <li className={`${listStyles}`}>Site Index</li>
          <li className={`${listStyles}`}>IMDbPro</li>
          <li className={`${listStyles}`}>Box Office Mojo</li>
          <li className={`${listStyles}`}>IMDb Developer</li>
        </ul>

        <ul className="sect2 flex gap-x-5 sm:gap-x-8 flex-wrap gap-y-3 justify-center">
          <li className={`${listStyles}`}>Advertising</li>
          <li className={`${listStyles}`}>Press Room</li>
          <li className={`${listStyles}`}>Jobs</li>
          <li className={`${listStyles}`}>Condition of Use</li>
          <li className={`${listStyles}`}>Privacy Policy</li>
          <li className={`${listStyles}`}>Your Ads Privacy Choices</li>
        </ul>

        <p className="text-clampSm">an amazon company</p>

        <p className="text-gray-500">@ 1990-2023 by IMDb.com, inc</p>
      </div>
    </footer>
  );
}

export default Footer