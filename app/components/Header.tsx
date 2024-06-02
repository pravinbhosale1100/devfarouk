import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center h-[28rem] mt-10 ">
      <section className="w-[50%] relative  px-24 py-24 flex flex-col gap-4">
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
        className=" flex justify-center items-center w-[50%] bg-cover bg-center h-full"
        style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}
      >
        <Image
          alt="profile image"
          src={"/images/profile.jpg"}
          style={{ borderRadius: "10%" }}
          objectFit="cover"
          height={"100"}
          width={"300"}
        />
      </section>
    </header>
  );
};
export default Header;
