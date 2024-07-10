import { sections } from "@/datas/data";
import Link from "next/link";
import { HiDocumentText } from "react-icons/hi";

const Navbar = () => {
  return (
    <section className="fixed top-0 h-24 flex flex-row items-center w-full shadow-sm justify-between  px-16 z-20 bg-[#fffbf5]">
      <Link
        href={"/"}
        className="flex justify-center items-center uppercase tracking-wider "
      >
        <h1 className=" text-4xl font-bold lg:text-6xl text-secondary-color-3 ">
          Dev
        </h1>
        <p className=" text-2xl lg:text-3xl font-extrabold  ">Farouk</p>
      </Link>
      <div className=" invisible md:visible ">
        <nav className=" w-full flex flex-row justify-between items-center ">
          <ul className="w-full flex flex-row justify-start items-center font-medium text-lg gap-8">
            {sections.map((section, id) => (
              <li key={id}>
                <Link
                  key={id}
                  href={section.idRoute}
                  className=" border-b border-transparent hover:border-black transition-all "
                >
                  {section.name}{" "}
                </Link>
              </li>
            ))}
            <li>
              {" "}
              <Link
                href={
                  "https://docs.google.com/document/d/1bp5RxbPMA8RHlcUGZIOXIKQ8I1wzLx3MvOQLXVlf8SQ/edit?usp=sharing"
                }
                className="flex items-center justify-center gap-3 px-5 py-2  font-semibold w-max     border-[1px] hover:bg-[#FBEDDD] transition-all border-black rounded-lg "
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
