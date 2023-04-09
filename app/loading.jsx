import React from 'react'
import { Loader } from "./utils/svgs"

export default function loading() {
  return (
    <div className="wrapper w-full h-screen flex justify-center items-center">
      <div className=" w-full max-w-[600px] mx-auto flex items-center justify-center">
        <Loader width="52" height="18" />
      </div>
    </div>
  );
}
