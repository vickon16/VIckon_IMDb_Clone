"use client"

import React, { useEffect, useState } from 'react'
import {ChevronLeft, ChevronRight, NavMovieIcon} from "../utils/svgs";

const navListStyles = "text-white font-semibold hover:underline cursor-pointer";

const NavbarItems = ({heading, icon, list}) => {
  const [tabOpen, setTabOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
    window.innerWidth > 1024 ? setTabOpen(true) : setTabOpen(false);
  }, false);

  return () => window.removeEventListener("resize");
  }, [])

  return (
    <article
      onClick={() => setTabOpen((prev) => !prev)}
      className="nav-list-item lg:w-[33.3%] flex items-center gap-x-2 group text-bgWhite2 lg:pointer-events-none"
    >
      <aside
        className={`self-start max-h-fit [&>*]:group-hover:text-white lg:[&>*]:fill-btnYellow ${
            tabOpen ? "[&>*]:fill-btnYellow" : ""
          }`}
      >
        {icon}
      </aside>

      <aside className="flex flex-col w-full">
        <div className="list-header flex items-center justify-between w-full px-2 gap-x-4 cursor-pointer">
          <span
            className={`flex-1 text-lg text-bgWhite ${
              tabOpen ? "text-btnYellow" : ""
            } lg:text-white lg:text-2xl font-semibold `}
          >
            {heading}
          </span>
          <div className="lg:hidden">
            {!tabOpen && (
              <ChevronRight
                width="12"
                height="12"
                className="rotate-90 group-hover:text-white"
              />
            )}
            {tabOpen && (
              <ChevronLeft
                width="12"
                height="12"
                className="rotate-90 group-hover:text-white"
              />
            )}
          </div>
        </div>

        {/* list body hidden */}
        <ul
          className={`list-body flex flex-col gap-y-3 ml-2 overflow-hidden [&>*:nth-child(1)]:mt-5 pointer-events-auto ${
            tabOpen ? "h-auto" : "h-0"
          } lg:h-auto `}
        >
          {list.map((item, i) => (
            <li key={item+i} className={`${navListStyles}`}>{item}</li>
          ))}
        </ul>
      </aside>
    </article>
  );
}

export default NavbarItems