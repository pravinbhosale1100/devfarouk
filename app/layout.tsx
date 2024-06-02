import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevFarouk 👨‍💻",
  description: "Portfolio || DevFarouk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <main className="relative flex flex-row w-full">
          <section className="grid w-[60%]">
            <nav className=" w-full flex flex-row justify-between items-center border-r-2 border-b-2 border-r-primary-color border-b-primary-color border-solid py-6 px-10  ">
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
          </section>
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

          {children}
          <footer></footer>
        </main>
      </body>
    </html>
  );
}
