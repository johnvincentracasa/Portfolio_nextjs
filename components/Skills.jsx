import Image from "next/future/image";
import Skill from "./Skill";

const TechSkills = [
  "HTML",
  "CSS",
  "Javascript",
  "React.js",
  "Nextjs",
  "Gatsby",
  "Tailwind",
  "TypeScript",
  "SQL",
  "GraphQL",
  "Express",
  "Strapi",
  "Contentful",
  "FireBase",
  "PHP",
  "Node.js",
  "Python",
  "MongoDB",
  "GIT",
];

function Skills() {
  return (
    <section className="text-primary-color-black body-font md:h-screen">
      <h1 className="container text-3xl md:text-5xl text-center lg:text-left pt-16 text-secondary-color-navy">
        My Skills
      </h1>
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="md:w-2/6 w-5/6 mb-10 md:mb-0 ">
          <Image
            src="/main_profile-min.png"
            alt="jvracasa_profile"
            className="w-auto rounded-3xl mx-auto"
            width="400"
            height="800"
          />
        </div>

        <div className="lg:flex-grow md:w-2/3 lg:pl-16 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
          <div className="flex flex-wrap mb-8 md:mb-12 justify-start">
            {TechSkills.map((teckskill) => {
              return <Skill key={teckskill} skill={teckskill} />;
            })}
          </div>
          <h1 className="title-font sm:text-4xl text-3xl mb-8 md:mb-12 font-medium text-gray-900">
            I Love Building Stuff
          </h1>
          <p className="text-lg tracking-wide leading-8 mb-8 md:mb-16">
            I started building and creating stuff with LEGO when I was a kid.
            Since then I have been playing and building with all sort of things.
            That led me to music, electrical engineering, data analytics and web
            development
          </p>

          <a className="cursor-pointer text-xl text-secondary-color-navy tracking-wide font-medium">
            Keep reading my bio . . .
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
