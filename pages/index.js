import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Skill from "../components/Skill";

export default function Home() {
  return (
    <div>
      <Head>
        <title>jvracasa portfolio</title>
        <meta
          name="john vincent racasa portfolio"
          content="Portfolio of John Vincent Racasa generate using NEXT JS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-primary-color-black h-screen pt-4 sm:pt-12">
        <Navbar />

        <HeroSection />
      </div>

      {/* BACKGROUND AND SKILLS */}

      <Skills />
    </div>
  );
}
