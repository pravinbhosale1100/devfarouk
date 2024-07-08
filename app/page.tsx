import Header from "./sections/Header";
import About from "./sections/About";
import Works from "./sections/Works";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Experience />
      <Works />
      <Contact />
    </main>
  );
}
