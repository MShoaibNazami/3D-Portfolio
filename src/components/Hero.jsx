/* eslint-disable react/no-unescaped-entities */
import { styles } from "../styles";
import About from "./About";

const Hero = () => {
  return (
    <section
      className={`relative w-full min-h-screen mx-auto`}
      style={{ marginTop: "100px" }}
    >
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Muhammad Shoaib Nazami</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-stack developer at DevBrains, building production SaaS
            interfaces with React, Next.js and TypeScript on top of GraphQL
            APIs backed by NestJS, Prisma and PostgreSQL. Outside work, I build
            MERN stack projects end to end — from schema design and REST APIs
            to deployed React interfaces.
          </p>
        </div>
      </div>

      <About />
    </section>
  );
};

export default Hero;
