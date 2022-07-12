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
      </nav>
    </>
  )
}
