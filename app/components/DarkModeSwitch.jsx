"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const {systemTheme, theme, setTheme } = useTheme();
  const [mounted , setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="mode hidden xs:flex mx-0 xs:mx-3 text-xl xs:text-2xl">
      {mounted && currentTheme === "dark" ? (
        <button className="cursor-pointer outline-none border-none" onClick={() => setTheme("light")}>
          <MdLightMode />
        </button>
        ) : (
        <button className="cursor-pointer outline-none border-none" onClick={() => setTheme("dark")}>
          <MdDarkMode />
        </button>
      )}
    </div>
  );
}

export default DarkModeSwitch