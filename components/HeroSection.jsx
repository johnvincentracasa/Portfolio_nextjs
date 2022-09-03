import Image from "next/image";
import styles from "./componets_styles/buttons.module.css";

function HeroSection() {
  return (
    // HERO SECTION

    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-36 lg:mt-56">
        {/* CONTAINER */}

        <div className="flex flex-initial flex-col items-center lg:items-start md:w-3/5">
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl text-center lg:text-left mb-6 ">
            Hi, I'm John | Software Engineer
          </h2>
          <p className="text-slate-400 text-lg text-center lg:text-left mb-6 md:mr-12 ">
            I am passionate in creating and exploring new things, I'm a lifelong
            learner and I might have a thing for classic motorcyle
          </p>
          <div className="flex justify-center flex-wrap gap-6 ">
            <button
              type="button"
              className={`${styles.btn} text-white bg-accent-color-blue  hover:bg-secondary-color-navy hover:text-white`}
            >
              Hire me
            </button>

            <button
              type="button"
              className={`${styles.btn} text-white   hover:bg-accent-color-winter hover:text-secondary-color-navy border`}
            >
              My Portfolio
            </button>
          </div>
        </div>

        {/* IMAGE
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            src="/hero.png"
            alt="web devlopment hero"
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"
          />
        </div> */}
      </div>

      {/* <div className="hidden md:block overflow-hidden bg-accent-color-winter rounded-l-full  absolute  md:w-4/5 lg:w-2/4 h-60 top-40 right-0 "></div> */}
    </section>
  );
}

export default HeroSection;
