import Link from "next/link";

const Navbar = () => {
  return (
    <section className="relative flex flex-row w-full">
      <div className=" w-[60%]">
        <nav className=" w-full flex flex-row justify-between items-center border-r-2 border-b-2 border-r-secondary-color-2 border-b-secondary-color-2 border-solid py-6 px-40">
          <div>
            <h1>Dev Farouk</h1>
          </div>

          <ul className="w-full flex flex-row justify-end  gap-4">
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
          </ul>
        </nav>
      </div>
      <section className="w-[40%]">
        <ul className="flex justify-center items-center gap-4 py-7">
          <li>
            <Link href={""}>Github</Link>
          </li>
          <li>
            <Link href={""}>LinkedIn</Link>
          </li>
          <li>
            <Link href={""}>X</Link>
          </li>
        </ul>
      </section>
    </section>
  );
};
export default Navbar;
