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
          <p className=" ml-12">Front-end Developer</p>
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
        <Image
          alt="profile image"
          src={"/images/profile-7.jpg"}
          style={{
            borderRadius: "50%",
            filter: "brightness(0.9) contrast(1.1)",
          }}
          objectFit="cover"
          height={"150"}
          width={"300"}
        />

        <Link
          href="#message"
          className="p-4 bg-white absolute left-[48%] bottom-[12%] rounded-[50%]"
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
