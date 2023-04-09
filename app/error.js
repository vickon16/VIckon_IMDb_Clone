"use client"

import React, {useEffect} from 'react';
import {btn} from "./utils/commonStyle"

export default function Error({error, reset}) {

  
useEffect(() => {console.error(error)}, [error]);
  return (
    <div className='error-wrapper h-[70vh] w-full'>
      <div className={`w-full h-full max-w-[600px] mx-auto flex flex-col gap-y-6 items-center justify-center`}>
        <h2 className='text-2xl font-bold'>Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className={`${btn} h-fit`}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
