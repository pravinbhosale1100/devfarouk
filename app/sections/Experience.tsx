"use client";
import { companies, companiesInfo } from "@/datas/data";
import { useState } from "react";
import { RiArrowDropRightFill } from "react-icons/ri";

const Experience = () => {
  const [tab, setTab] = useState<number>(0);

  return (
    <section className="flex flex-col px-40 py-12">
      <header className="flex flex-row gap-4 justify-start items-center font-semibold">
        <span className=" text-2xl">02. Where I've worked</span>
        <div className=" w-36 border-b-[1px] border-b-border-color"></div>
      </header>
      <div className="flex flex-row w-full py-10  gap-10 items-center">
        <div
          className="w-[30%] border-l-secondary-color-3 border-l-2  "
          style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}
        >
          {companies.map((company, id) => (
            <div
              key={id}
              className={`w-full cursor-pointer hover:text-white hover:bg-secondary-color-3 transition-all px-5 py-2 font-semibold ${
                tab == id &&
                "border-l-2 border-secondary-color-3 bg-secondary-color-3 text-white"
              }`}
              onClick={() => setTab(id)}
            >
              {company}
            </div>
          ))}
        </div>
        <div className="w-[60%] h-64">
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
