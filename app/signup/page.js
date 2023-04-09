/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { IMDBIcon } from '../utils/svgs';
import { btn } from '../utils/commonStyle';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="bg-bgWhite text-black w-full min-h-screen">
      <div className='wrapper shadow-sm drop-shadow-sm'>
        <section
          className={`signup-container mx-auto w-full max-w-[400px] py-8 px-6 flex flex-col items-center`}
        >
          <IMDBIcon width="120" height="60" />

          <form
            className="left flex flex-col gap-y-4 w-full p-4 border border-black border-opacity-20 mt-5"
            autoComplete="off"
          >
            <h1 className="text-clampBase font-normal">Create Account</h1>

            <article className="flex flex-col">
              <label htmlFor="name" className="font-semibold">
                Your name
              </label>
              <input
                type="text"
                placeholder="First and Last name"
                className="bg-white text-black border border-gray-400 px-2 py-1 rounded-sm"
                id="name"
              />
            </article>
            <article className="flex flex-col">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                className="bg-white text-black border border-gray-400 px-2 py-1 rounded-sm"
                id="email"
              />
            </article>
            <article className="flex flex-col">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="at least 8 characters"
                className="bg-white text-black border border-gray-400 px-2 py-1 rounded-sm"
                id="password"
              />
            </article>

            <article className="flex flex-col">
              <label htmlFor="Reenter-password" className="font-semibold">
                Re-enter password
              </label>
              <input
                type="password"
                className="bg-white text-black border border-gray-400 px-2 py-1 rounded-sm"
                id="Reenter-password"
                autoComplete="new-password"
              />
            </article>

            <button className={`${btn} !font-normal`}>
              Create your IMDb Account
            </button>

            <p className="w-full text-[13px] py-3">
              Already have an account?{" "}
              <Link className="text-blue-500" href={"/signin"}>
                Sign in
              </Link>
            </p>
          </form>
        </section>
      </div>

      <section>
        <div className="container w-full max-w-[400px] pt-5 mx-auto flex flex-col items-center justify-center">
          <div className="flex gap-x-6 mb-3">
            <a href="/" className='text-blue-500 text-xs hover:underline'>Help</a>
            <a href="/" className='text-blue-500 text-xs hover:underline'>Condition of Use</a>
            <a href="/" className='text-blue-500 text-xs hover:underline'>Privacy Notice</a>
          </div>
          <p className='text-xs'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </section>
    </div>
  );
}

export default SignUp