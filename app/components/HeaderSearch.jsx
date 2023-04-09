import React from 'react'
import { SearchIcon } from "../utils/svgs"

const HeaderSearch = () => {
  return (
    <aside className="relative flex items-center flex-[3]">
      <button className="bg-white text-black py-1 px-3 font-semibold rounded-tl-md rounded-bl-md">All
      </button>
      <input
        type="text"
        placeholder="Search IMDb"
        className="py-[0.4rem] px-3 ml-[1px] w-full rounded-tr-md rounded-br-md bg-white text-sm sm:text-md"
      />
      <SearchIcon className="absolute right-2 z-30 fill-bgDark2" />
    </aside>
  );
}

export default HeaderSearch