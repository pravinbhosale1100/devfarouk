import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="flex flex-row justify-between items-center h-[28rem] px-40 py-4 mt-10 bg-center bg-cover"
      style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}
    >
      <section className="w-[50%] relative pb-10   flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <h5 className=" font-medium text-lg">Hi, I'm</h5>
          <h1 className=" font-bold text-6xl">Farouk Mustapha</h1>
        </div>
        <div className="relative">
          <p className=" ml-12 py-1 px-2 bg-secondary-color font-semibold w-max rounded-md">
            Front-end Developer
          </p>
          <p className="mt-2">
            I'm a Front-end Developer based in Lagos, Nigeria. I specialize in
            building responsive and accessible websites and web applications.
          </p>
        </div>
      </section>
      <section
        className="relative flex justify-center items-center w-[50%] h-full bg-right bg-contain bg-no-repeat "
        style={{ backgroundImage: "url('/svgs/profile-bg.svg')" }}
      >
        <div className="relative h-[20rem] w-[20rem]">
          <Image
            alt="profile image"
            src={"/images/profile.jpg"}
            style={{
              borderRadius: "50%",
              filter: "brightness(0.9) contrast(1.1)",
              height: "100%",
              width: "100%",
            }}
            objectFit="cover"
            layout="fill"
          />
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full"
            style={{
              backgroundColor: "#4d1f00",
              mixBlendMode: "multiply",
              backgroundBlendMode: "screen",
              opacity: 0.5,
              zIndex: 20,
            }}
          />
        </div>

        <Link
          href="#message"
          className="p-4 bg-white absolute left-[48%] bottom-[5%] rounded-[50%] z-20"
        >
          <Image
            alt="message"
            src={"/svgs/message-programming.svg"}
            width={20}
            height={20}
          />
        </Link>
      </section>
    </header>
  );
};
export default Header;
