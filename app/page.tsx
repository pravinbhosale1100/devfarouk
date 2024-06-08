import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import Works from "./components/Works";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Works />
    </main>
  );
}
