import { sections } from "@/datas/data";
import Link from "next/link";
import { HiDocumentText } from "react-icons/hi";

const Navbar = () => {
  return (
    <section
      className="fixed top-0 h-24 flex flex-row items-center w-full shadow-sm justify-between  px-5 sm:px-16 z-20 bg-[#fffbf5]"
      data-aos="fade-down"
    >
      <Link
        href={"/"}
        className="flex justify-start sm:justify-center items-center uppercase tracking-wider "
      >
        <h1 className=" text-3xl sm:text-3xl font-bold lg:text-4xl text-secondary-color-3 ">
          Dev
        </h1>
        <p className=" text-xl sm:text-2xl lg:text-2xl font-extrabold  ">
          Farouk
        </p>
      </Link>
      <div className="  hidden md:inline-block ">
        <nav className=" w-full flex flex-row justify-between items-center ">
          <ul className="w-full flex flex-row justify-start items-center font-medium text-lg gap-8">
            {sections.map((section, id) => (
              <li key={id} className=" hidden lg:inline-block">
                <Link
                  key={id}
                  href={section.idRoute}
                  className=" border-b border-transparent hover:border-black transition-all "
                >
                  {section.name}{" "}
                </Link>
              </li>
            ))}
            <li className="hidden lg:inline-block">
              {" "}
              <Link
                href={
                  "https://docs.google.com/document/d/1bp5RxbPMA8RHlcUGZIOXIKQ8I1wzLx3MvOQLXVlf8SQ/edit?usp=sharing"
                }
                className="flex items-center justify-center gap-3 px-5 py-2  font-b w-max     border-[1px] hover:bg-[#FBEDDD] transition-all border-black rounded-lg "
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
                <HiDocumentText size={25} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default Navbar;
