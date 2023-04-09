"use client";

import { HamburgerIcon, IMDBIcon, IMDBProIcon, WatchListIcon } from '../utils/svgs'
import Link from 'next/link';
import React, { useState } from 'react'
import {HeaderSearch, Navbar} from '.';
import {container, listBtn} from "../utils/commonStyle";
import {DarkModeSwitch} from ".";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState();

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-[60px] bg-bgWhite1 dark:bg-bgDark1 flex flex-col justify-center items-center text-dark dark:text-white transition-colors duration-300 z-[8]">
      <div
        className={`header-container ${container} flex items-center gap-x-3`}
      >
        <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />

        <aside className="flex items-center gap-x-3">
          <Link href={"/"}>
            <IMDBIcon className="w-[40px] h-[32px] xs:w-[64px] xs:h-[32px]" />
          </Link>

          <div
            className={`hidden sm:flex items-center gap-x-1 ${listBtn}`}
            onClick={() => setShowNavbar(true)}
          >
            <HamburgerIcon />
            <h4>Menu</h4>
          </div>
        </aside>

        <HeaderSearch />

        <aside className="flex items-center gap-x-2">
          <DarkModeSwitch />
          <Link
            href="/"
            className={`${listBtn} px-6 py-[0.85rem] hidden lg:flex`}
          >
            <IMDBProIcon />
          </Link>

          <span className="w-[2px] h-[30px] border border-gray-600 hidden sm:flex"></span>

          <Link
            href="/"
            className={`hidden lg:flex items-center ${listBtn} gap-1 `}
          >
            <WatchListIcon />
            <span>WatchList</span>
          </Link>

          <Link href="/signin" className={`${listBtn} hidden sm:flex`}>
            Sign in
          </Link>

          <span className={`${listBtn} hidden sm:flex`}>EN</span>

          <HamburgerIcon className={`flex sm:hidden cursor-pointer`} onClick={() => setShowNavbar(true)} />
        </aside>
      </div>
    </header>
  );
}

export default Header