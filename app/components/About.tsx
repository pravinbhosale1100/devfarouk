const About = () => {
  return (
    <section className="flex flex-col px-40 py-12">
      <div className="flex flex-row gap-4 justify-center items-center font-semibold">
        <div className=" w-36  border-b-2 border-b-secondary-color-2"></div>
        <h3 className=" text-xl">01. About Me</h3>
        <div className=" w-36  border-b-2 border-b-secondary-color-2"></div>
      </div>
      <div className="flex flex-row w-full py-10 ">
        <div className="w-[50%] flex flex-col gap-2 ">
          <h4 className="font-semibold">Technologies i work with</h4>
          <ul>
            <li className=" grayscale hover:grayscale-0 flex items-center cursor-pointer gap-5">
              <img
                src="https://cdn.simpleicons.org/nextdotjs"
                alt="Nextjs"
                height={50}
                width={50}
              />
              <span>NextJs</span>
            </li>
            <li className=" grayscale hover:grayscale-0 flex items-center gap-5 cursor-pointer">
              <img
                src="https://cdn.simpleicons.org/react"
                alt="Nextjs"
                height={50}
                width={50}
              />
              <span>React</span>
            </li>
            <li className=" grayscale hover:grayscale-0 flex items-center gap-5 cursor-pointer">
              <img
                src="https://cdn.simpleicons.org/tailwindcss"
                alt="Nextjs"
                height={50}
                width={50}
              />
              <span>TailwindCss</span>
            </li>{" "}
            <li className=" grayscale hover:grayscale-0 flex items-center gap-5 cursor-pointer">
              <img
                src="https://cdn.simpleicons.org/framer"
                alt="Nextjs"
                height={50}
                width={50}
              />
              <span>Framer Motion</span>
            </li>
          </ul>
        </div>
        <div className="w-[50%]">
          <article>
            Farouk Mustapha is a Frontend Developer based in Lagos, Nigeria,
            with 2 years of experience in the field. I have developed web
            applications using JavaScript and TypeScript. Over this period, I
            have worked and interned at startups and companies such as Pathpalz,
            Berrystamp, and JustDoStartUp. <br />
            <br />
            I have contributed to numerous projects, collaborating with product
            designers, backend developers, DevOps, and other tech professionals.
            I have a strong passion for learning and teaching, and am always
            updated with the latest advancements in technology.
            <br /> <br />I take my work seriously, but that doesn't mean I can't
            enjoy a bit of fun along the way. I enjoy watching Anime.
          </article>
        </div>
      </div>
    </section>
  );
};
export default About;
