import Image from "next/image";
import Header from "./sections/Header";
import About from "./sections/About";
import Works from "./sections/Works";
import Experience from "./sections/Experience";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Experience />
      <Works />
    </main>
  );
}
