"use client";
import Buttons from "../atoms/Buttons";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  return (
    <nav className="w-full z-20 top-0 left-0 bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="text-primary font-bold text-lg md:text-3xl">
          ChurchApp
        </div>
        <div className="flex md:order-2">
          <Buttons type="filled">Sign in/Register</Buttons>
          <button
            type="button"
            // onClick={toggleDropDown}
            className="inline-flex items-center p-2 justify-center text-sm text-gray-400 rounded-lg md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            {/* <HiOutlineMenuAlt2 className="text-white text-2xl" /> */}
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link
                href=""
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-primary"
              >
                E-books
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-primary"
              >
                Audio Messages
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-primary"
              >
                NotePads
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
