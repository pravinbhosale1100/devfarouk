"use client";

import { useState } from "react";
import { sections } from "@/datas/data";
import Link from "next/link";
import { HiDocumentText } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className="fixed top-0 h-24 flex flex-row items-center w-full shadow-sm justify-between px-5 sm:px-16 z-20 bg-[#fffbf5]"
      data-aos="fade-down"
    >
      <Link
        href="/"
        className="flex justify-start sm:justify-center items-center uppercase tracking-wider "
      >
        <h1 className="text-3xl sm:text-3xl font-bold lg:text-4xl text-secondary-color-3">
          Dev
        </h1>
        <p className="text-xl sm:text-2xl lg:text-2xl font-extrabold">Farouk</p>
      </Link>
      <div className="hidden md:inline-block">
        <nav className="w-full flex flex-row justify-between items-center">
          <ul className="w-full flex flex-row justify-start items-center font-medium text-lg gap-8">
            {sections.map((section, id) => (
              <li key={id} className="hidden lg:inline-block">
                <Link
                  key={id}
                  href={section.idRoute}
                  className="border-b border-transparent hover:border-black transition-all"
                >
                  {section.name}
                </Link>
              </li>
            ))}
            <li className="hidden lg:inline-block">
              <Link
                href="https://docs.google.com/document/d/1bp5RxbPMA8RHlcUGZIOXIKQ8I1wzLx3MvOQLXVlf8SQ/edit?usp=sharing"
                className="flex items-center justify-center gap-3 px-5 py-2 font-b w-max border-[1px] hover:bg-[#FBEDDD] transition-all border-black rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
                <HiDocumentText size={25} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="lg:hidden z-50">
        <button
          className={`hamburger ${
            isOpen ? "open" : ""
          } relative z-30 w-8 h-6 flex flex-col justify-between items-center`}
          onClick={toggleMenu}
        >
          <span className="line block w-full h-1 bg-black transition-transform duration-300 ease-in-out origin-center"></span>
          <span className="line block w-full h-1 bg-secondary-color-3 transition-opacity duration-300 ease-in-out"></span>
          <span className="line block w-full h-1 bg-black transition-transform duration-300 ease-in-out origin-center"></span>
        </button>
      </div>
      <div
        className={`fixed inset-0 w-full h-lvh bg-black bg-opacity-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className=" absolute top-0 right-0 h-full w-3/4 bg-white shadow-lg p-4">
          <nav
            className=" w-full
           flex flex-col items-center  space-y-4 z-40 mt-36 gap-4 justify-center"
          >
            {sections.map((section, id) => (
              <Link
                key={id}
                href={section.idRoute}
                className="text-black font-medium text-lg"
                onClick={toggleMenu}
              >
                {section.name}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/document/d/1bp5RxbPMA8RHlcUGZIOXIKQ8I1wzLx3MvOQLXVlf8SQ/edit?usp=sharing"
              className="flex items-center justify-center gap-3 px-5 py-2 font-b w-max border-[1px] hover:bg-[#FBEDDD] transition-all border-black rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              View Resume
              <HiDocumentText size={25} />
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
