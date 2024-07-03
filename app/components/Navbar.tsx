import { sections } from "@/datas/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="fixed top-0 h-24 flex flex-row items-center w-full shadow-sm justify-between  px-16 z-10 bg-[#fffbf5]">
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
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default Navbar;
