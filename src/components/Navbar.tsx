"use client";
import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "@/constants/NavConst";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white shadow-md  flex px-2 md:px-6 lg:px-10 fixed  left-0 right-0 top-0  h-20 z-50 ">
      <div className="container relative mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 hover:text-gray-600"
        >
          Shariful Islam
        </Link>

        {/* Navbar Links */}
        <div className="md:hidden">
          <button
            onClick={handleClick}
            className="block text-gray-800 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="flex md:hidden flex-col absolute left-0 right-0 top-[5rem] bg-blue-950 items-center py-5  justify-between min-h-[50vh] z-[99999px] ">
            {NavLinks.map((link) => (
              <Link
                href={link.src}
                key={link.src}
                className=" text-white font-bold border border-white w-36 h-12 text-center flex items-center justify-center hover:text-gray-300  md:inline"
              >
                {link.text}
              </Link>
            ))}

            {isLogin ? (
              <Link
                href="/logout"
                className="text-white font-bold border border-white w-36 h-12 text-center flex items-center justify-center hover:text-gray-300  md:inline"
              >
                Logout
              </Link>
            ) : (
              <>
                <Link
                  href="/register"
                  className="text-white font-bold border border-white w-36 h-12 text-center flex items-center justify-center hover:text-gray-300  md:inline"
                >
                  Register
                </Link>

                <Link
                  href="/login"
                  className="text-white font-bold border border-white w-36 h-12 text-center flex items-center justify-center hover:text-gray-300  md:inline"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        )}

        <div className={`hidden md:flex md:items-center md:space-x-6`}>
          {NavLinks.map((link) => (
            <Link
              href={link.src}
              key={link.src}
              className="block text-gray-800 hover:text-gray-600 md:inline"
            >
              {link.text}
            </Link>
          ))}

          {isLogin ? (
            <Link
              href="/logout"
              className="block text-gray-800 hover:text-gray-600 md:inline"
            >
              Logout
            </Link>
          ) : (
            <>
              <Link
                href="/register"
                className="block text-gray-800 hover:text-gray-600 md:inline"
              >
                Register
              </Link>

              <Link
                href="/login"
                className="block text-gray-800 hover:text-gray-600 md:inline"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
