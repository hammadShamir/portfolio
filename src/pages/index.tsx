import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Service from "@/components/Service";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <Projects />
      <Contact />
    </>
  );
}
