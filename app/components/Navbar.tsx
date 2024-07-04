import { sections } from "@/datas/data";
import Link from "next/link";
import { HiDocumentText } from "react-icons/hi";

const Navbar = () => {
  return (
    <section className="fixed top-0 h-24 flex flex-row items-center w-full shadow-sm justify-between  px-16 z-20 bg-[#fff]">
      <div className="flex justify-center items-center">
        <h1 className=" font-bold text-3xl">Dev</h1>
        <p className=" text-3xl">Farouk</p>
      </div>
      <div className=" ">
        <nav className=" w-full flex flex-row justify-between items-center ">
          <ul className="w-full flex flex-row justify-start items-center font-medium text-lg gap-8">
            {sections.map((section, id) => (
              <li key={id}>
                <Link key={id} href={section.idRoute}>
                  {section.name}{" "}
                </Link>
              </li>
            ))}
            <li>
              {" "}
              <Link
                href={"/"}
                className="flex items-center justify-center gap-3 px-5 py-2  font-semibold w-max     border-[1px] hover:bg-[#fffbf5] hover:border-secondary-color transition-all border-black rounded-lg "
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
