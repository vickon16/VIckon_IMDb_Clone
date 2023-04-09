/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { btn, container } from '../utils/commonStyle';
import { IMDBIcon } from '../utils/svgs';
import { FcGoogle } from "react-icons/fc";
import {BsApple} from "react-icons/bs"
import {AiFillAmazonSquare} from "react-icons/ai"
import { Footer, Header } from '../components';

const Signin = () => {
  return (
    <>
      <Header />
      <section className="bg-bgWhite1 w-full">
        <div
          className={`signin-container mx-auto w-full max-w-[1000px] bg-bgWhite py-8 px-6 flex flex-wrap sm:flex-nowrap text-black`}
        >
          <aside className="left flex flex-col items-center gap-y-5 w-full py-6">
            <h1 className="font-bold text-clampMd">Sign in</h1>

            <div className="flex flex-col gap-y-2">
              <article className="flex items-center gap-x-5 px-6 py-2 rounded-[0.25rem] border border-gray-500 border-opacity-30 cursor-pointer">
                <IMDBIcon width="30" height="15" />
                <span className="font-semibold text-lg text-gray-600">
                  Sign in with IMDB
                </span>
              </article>

              <article className="flex items-center gap-x-5 px-6 py-2 rounded-[0.25rem] border border-gray-500 border-opacity-30 cursor-pointer">
                <AiFillAmazonSquare className="text-lg" />
                <span className="font-semibold text-lg text-gray-600">
                  Sign in with Amazon
                </span>
              </article>

              <article className="flex items-center gap-x-5 px-6 py-2 rounded-[0.25rem] border border-gray-500 border-opacity-30 cursor-pointer">
                <FcGoogle className="text-lg" />
                <span className="font-semibold text-lg text-gray-600">
                  Sign in with Google
                </span>
              </article>

              <article className="flex items-center gap-x-5 px-6 py-2 rounded-[0.25rem] border border-gray-500 border-opacity-30 cursor-pointer">
                <BsApple className="text-lg" />
                <span className="font-semibold text-lg text-gray-600">
                  Sign in with Apple
                </span>
              </article>
            </div>

            <div className="flex gap-x-2 items-center w-[35%]">
              <span className="w-full h-[1px] border border-gray-400"></span>
              <span>or</span>
              <span className="w-full h-[1px] border border-gray-400"></span>
            </div>

            <button className={`${btn}`}>Create New Account</button>

            <p className="w-[60%] text-center text-[11px] tracking-widest">
              By signin in, you agree to IMDb's Conditions of{" "}
              <a href="/" className="text-blue-500">
                Use and Privacy Policy
              </a>
            </p>
          </aside>

          <aside className="right flex flex-col p-6 gap-y-2 w-full border-l-[1px] items-center sm:items-start text-center sm:text-start">
            <h1 className="font-bold text-clampMd">
              Benefits of your free IMDb account
            </h1>

            <article>
              <h2 className="font-semibold">Personalized Recommendations</h2>
              <p>Discover shows you'll love.</p>
            </article>
            <article>
              <h2 className="font-semibold">Your Watchlist</h2>
              <p>
                Track everything you want to watch and receive e-mail when movies
                open in theaters.
              </p>
            </article>
            <article>
              <h2 className="font-semibold">Your Ratings</h2>
              <p>Rate and remember everything you've seen.</p>
            </article>
            <article>
              <h2 className="font-semibold">Contribute to IMDb</h2>
              <p>Add data that will be seen by millions of people and get cool badges.</p>
            </article>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Signin