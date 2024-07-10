"use client";
import { companies, companiesInfo } from "@/datas/data";
import { useState } from "react";
import { RiArrowDropRightFill } from "react-icons/ri";

const Experience = () => {
  const [tab, setTab] = useState<number>(0);

  return (
    <section
      className="flex flex-col mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%] py-12"
      id="experience"
    >
      <header className="flex flex-row gap-4 justify-start items-center font-semibold">
        <span className=" text-2xl">02. Where I've worked</span>
        <div className=" w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </header>
      <div className="flex flex-col gap-5 lg:flex-row w-full py-10  lg:gap-10 items-center">
        <div
          id="companies-scrollbar"
          className="flex lg:gap-0 overflow-x-scroll lg:inline-block w-[100%]  lg:w-[30%] border-b-2 border-b-[#f2f2f2] lg:border-l-[#f2f2f2] lg:border-l-2  "
          style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}
        >
          {companies.map((company, id) => (
            <div
              key={id}
              className={` min-w-52 lg:w-full cursor-pointer hover:text-secondary-color-3 hover:bg-[#FBEDDD] transition-all px-5 py-2 font-semibold ${
                tab == id &&
                " border-b-2 lg:border-b-0  lg:border-l-2 border-secondary-color-3 bg-[#FBEDDD] text-secondary-color-3"
              }`}
              onClick={() => setTab(id)}
            >
              {company}
            </div>
          ))}
        </div>
        <div className="w-[100%] lg:w-[60%]  lg:h-64">
          <h3 className=" text-lg font-semibold">
            {companiesInfo[tab].title} @
            <span className="text-secondary-color-3">
              {companiesInfo[tab].company}
            </span>
          </h3>
          <p className=" text-base text-gray-500 mt-2">
            {companiesInfo[tab].location}
          </p>
          <h3 className="mt-2 text-gray-500">{companiesInfo[tab].duration}</h3>
          {companiesInfo[tab].roles.map((role) => (
            <div key={role} className="flex justify-start mt-2">
              <div>
                {" "}
                <RiArrowDropRightFill
                  size={40}
                  className=" text-secondary-color-3"
                />
              </div>
              <p className="text-base"> {role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
