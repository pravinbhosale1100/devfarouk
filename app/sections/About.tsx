import { technologies } from "@/datas/data";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="flex flex-col my-48 mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
      id="about"
    >
      <div className="flex flex-row gap-4 justify-end items-center font-semibold">
        <span className=" text-2xl">01. About Me</span>
        <div className=" w-36 border-b-[1px] border-b-border-color"></div>
      </div>
      <div className="flex flex-row w-full py-10  gap-10">
        <div className="w-[50%] flex flex-col gap-2">
          <h4 className="font-semibold">Technologies i work with</h4>
          <div style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}>
            <ul className="px-8 py-8 flex flex-col gap-2 h-72  flex-wrap w-full">
              {technologies.map((tech) => (
                <li className=" grayscale hover:grayscale-0 flex items-center cursor-pointer gap-5">
                  <img
                    src={tech.iconLink}
                    alt={tech.name}
                    height={50}
                    width={50}
                  />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[50%]">
          <article>
            Farouk Mustapha is a Frontend Developer based in Lagos, Nigeria,
            with 2 years of experience in the field. I have developed web
            applications using JavaScript and TypeScript. Over this period, I
            have worked and interned at startups and companies such as Pathpalz,
            Berrystamp, and JustDoStartUp. <br />
            <br />I have contributed to numerous projects, collaborating with
            product designers, backend developers, DevOps, and other tech
            professionals. I have a strong passion for learning and teaching,
            and am always updated with the latest advancements in technology.
          </article>
        </div>
      </div>
    </section>
  );
};
export default About;
