import Image from "next/image";
import Link from "next/link";
import { HiDocumentText } from "react-icons/hi";

const Header = () => {
  return (
    <header
      className="flex flex-row justify-between items-center pt-10 pb-24 px-40 py-12 mt-10 bg-center "
      style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}
    >
      <section className="w-[50%] relative pb-10   flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <h5 className=" font-medium text-lg">Hi, I'm</h5>
          <h1 className=" font-poppins  font-semibold text-6xl tracking-widest">
            Farouk.
          </h1>
        </div>
        <div className="relative">
          <p className="  ml-12 py-1 px-2 bg-secondary-color-2 font-semibold w-max rounded-md">
            A Front-end Developer
          </p>
          <p className="mt-2">
            I love turning designs and ideas into cool web experiences, and work
            closely with Product designers and backend developers to bring these
            ideas to life.
          </p>
        </div>
        <Link
          href={"/"}
          className="flex items-center justify-center gap-3 px-5 py-2  font-semibold w-max  mt-8 hover:scale-105  transition-all border-b-[1px] hover:border-b-2 border-b-black"
        >
          View Resume
          <HiDocumentText size={25} />
        </Link>
      </section>
      <section
        className="relative flex justify-center items-center w-[50%] h-full bg-right bg-contain bg-no-repeat "
        style={{ backgroundImage: "url('/svgs/profile-bg.svg')" }}
      >
        <div className="relative h-[20rem] w-[20rem] grayscale">
          <Image
            alt="profile image"
            src={"/images/profile.jpg"}
            style={{
              borderRadius: "50%",
              height: "100%",
              width: "100%",
            }}
            objectFit="cover"
            layout="fill"
          />
        </div>

        <Link
          href="#message"
          className="p-2 bg-white absolute left-[48%] bottom-[-7%] rounded-[50%] z-20 hover:bg-secondary-color-2 hover:text-white transition-all hover:fill-white"
        >
          <Image
            alt="message"
            src={"/svgs/message-programming.svg"}
            width={25}
            height={25}
          />
        </Link>
      </section>
    </header>
  );
};
export default Header;
