import Link from "next/link";

const Navbar = () => {
  return (
    <section className="relative flex flex-row items-center w-full shadow-sm justify-between  px-40">
      <div className=" ">
        <nav className=" w-full flex flex-row justify-between items-center ">
          <ul className="w-full flex flex-row justify-start font-medium text-lg  gap-8">
            <li>
              <Link href={"/about"}>About </Link>
            </li>
            <li>
              <Link href={"/about"}>Experience </Link>
            </li>
            <li>
              <Link href={"/about"}>Works </Link>
            </li>
            <li>
              <Link href={"/about"}>Contact </Link>
            </li>
          </ul>{" "}
        </nav>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" font-bold text-3xl">Dev</h1>
        <p className=" text-3xl">Farouk</p>
      </div>
      <section className="">
        <ul className="flex justify-center items-center gap-10 py-7">
          <li className=" grayscale hover:grayscale-0 flex items-center cursor-pointer gap-5">
            <Link href={"https://github.com/Farouk-ayo"}>
              <img
                src="https://cdn.simpleicons.org/github"
                alt="github"
                height={30}
                width={30}
              />{" "}
            </Link>
          </li>
          <li className=" grayscale hover:grayscale-0 flex items-center cursor-pointer gap-5">
            <Link href={"https://www.linkedin.com/in/Faroukayo"}>
              {" "}
              <img
                src="https://cdn.simpleicons.org/linkedin"
                alt="linkedin"
                height={30}
                width={30}
              />
            </Link>
          </li>
          <li className=" grayscale hover:grayscale-0 flex items-center cursor-pointer gap-5">
            <Link href={"https://x.com/Faroukayo24"}>
              {" "}
              <img
                src="https://cdn.simpleicons.org/x"
                alt="x"
                height={30}
                width={30}
              />
            </Link>
          </li>
          <li className=" grayscale hover:grayscale-0 flex items-center cursor-pointer gap-5">
            <Link href={"mailto:your.mustaphafarouk41@gmail.com"}>
              {" "}
              <img
                src="https://cdn.simpleicons.org/gmail"
                alt="gmail"
                height={30}
                width={30}
              />
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
};
export default Navbar;
