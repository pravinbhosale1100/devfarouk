import { sections, socialLinks } from "@/datas/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="relative flex flex-row items-center w-full shadow-sm justify-between  px-40">
      <div className=" ">
        <nav className=" w-full flex flex-row justify-between items-center ">
          <ul className="w-full flex flex-row justify-start font-medium text-lg gap-8">
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
      <div className="flex flex-col justify-center items-center">
        <h1 className=" font-bold text-3xl">Dev</h1>
        <p className=" text-3xl">Farouk</p>
      </div>
      <section className="">
        <ul className="flex justify-center items-center gap-10 py-7">
          {socialLinks.map((socialLink, id) => (
            <li
              key={id}
              className={`grayscale hover:grayscale-0 flex items-center cursor-pointer gap-5`}
            >
              <Link
                href={socialLink.link}
                className={`${
                  socialLink.name === "mail"
                    ? "flex items-center justify-center gap-3 px-5 py-2  font-semibold w-max    transition-all border-[1px] hover:border-2 border-black rounded-3xl"
                    : ""
                } `}
              >
                {socialLink.name === "mail" ? (
                  "Send a Message"
                ) : (
                  <img
                    src={socialLink.simpleIcon}
                    alt={socialLink.name}
                    height={20}
                    width={20}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
export default Navbar;
