import Image from "next/image";

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
        className=" flex justify-center items-center w-[50%] h-full bg-right bg-contain bg-no-repeat "
        style={{ backgroundImage: "url('/svgs/profile-bg.png')" }}
      >
        <Image
          alt="profile image"
          src={"/images/profile-12.jpg"}
          style={{
            borderRadius: "50%",
            filter: "brightness(0.9) contrast(1.1)",
          }}
          objectFit="cover"
          height={"150"}
          width={"300"}
        />
      </section>
    </header>
  );
};
export default Header;
