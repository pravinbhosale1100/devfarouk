import Image from "next/image";
import Link from "next/link";
import { HiDocumentText } from "react-icons/hi";

const Header = () => {
  return (
    <header className="flex flex-row justify-between mt-24 items-center pb-24  py-24  bg-center mx-[10%] ">
      <section className="w-[50%] relative pb-10   flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <span className=" font-medium text-lg">Hi, I'm</span>
          <h1 className=" font-semibold text-6xl">Farouk Mustapha</h1>
        </div>
        <div className="relative">
          <h2 className=" py-1 px-2 bg-secondary-color-3 text-white font-semibold w-max rounded-md text-xl">
            A Front-end Developer
          </h2>
          <h2 className="text-black text-3xl font-bold mt-4">
            I <span className=" text-secondary-color-3 ">D</span>
            <span className="text-black">esign</span> &{" "}
            <span className=" text-secondary-color-3 ">D</span>
            <span className="text-black">evelop</span> WebApps
          </h2>
          <p className="mt-2">
            I love turning designs and ideas into cool web experiences, and work
            closely with Product designers and backend developers to bring these
            ideas to life.
          </p>
        </div>
        <Link
          href={"mailto:your.mustaphafarouk41@gmail.com"}
          className="flex items-center justify-center gap-3 px-5 py-2  font-semibold w-max  mt-5   border-[1px] hover:bg-[#FBEDDD]  transition-all border-black rounded-lg"
        >
          Get in Touch
          <Image
            alt="message"
            src={"/svgs/message-programming.svg"}
            width={25}
            height={25}
          />{" "}
        </Link>
      </section>
      <section
        className="relative flex justify-end items-center w-[50%] h-[25rem] bg-right bg-contain bg-no-repeat"
        style={{ backgroundImage: "url('/svgs/profile-bg.svg')" }}
      >
        <div className="relative h-[17rem] w-[17rem]">
          <Image
            alt="profile image"
            src={"/profile.webp"}
            style={{
              borderRadius: "50%",
              height: "100%",
              width: "100%",
            }}
            objectFit="cover"
            layout="fill"
          />
        </div>
      </section>
    </header>
  );
};
export default Header;
