import { useState } from "react"
import {
  Link as ScrollLink
} from "react-scroll"

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap text-gray-700 p-6">
        <div className="flex items-center flex-shrink-0 flex-grow text-gray-700 mr-6">
          <a href="#">
            <span className="font-semibold text-gray-700  font-header text-xl tracking-tight">
              Morkaz Agege
            </span>
          </a>
        </div>
        <div className="block lg:hidden" onClick={() => setOpen(!open)}>
          <button className="flex items-center px-3 py-2 border rounded text-gray-700 border-teal-400 hover:text-black hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } w-full lg:block lg:flex lg:items-center lg:w-auto lg:pr-8`}
        >
          <div className="text-sm">
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="#about"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
              >
                About
              </a>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="conferences"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="#conferences"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
              >
                Conferences
              </a>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="alumni"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="#alumni"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700  mr-4"
              >
                Alumni
              </a>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="#contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700  mr-4 mb-4"
              >
                Contact
              </a>
            </ScrollLink>
          </div>
        </div>

        <div className="flex justify-end items-center space-x-2">
          <span className="text-sm text-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </span>
          <div>
            <input type="checkbox" name="toggle" id="toggle" className="hidden" />
            <label htmlFor="toggle">
              <div className="w-9 border-2 bg-white dark:bg-neutral-800 border-neutral-600
                ring-offset-8 ring-offset-neutral-800 h-5 flex items-center  bg-blue-400 rounded-full p1">
                <div className="toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-out"></div>
              </div>
            </label>
          </div>
          <span className="text-sm text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </span>
        </div>
    </nav>
    </>
  )
}
