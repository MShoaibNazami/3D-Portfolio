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
            Hi, I'm <span className="text-[#915EFF]">M Moiz Khan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Highly skilled and results-oriented passionate and energetic Unity game developer with
          over 4 years of experience in creating, engaging , designing, developing, and deploying
          robust and scalable immersive mobile games. Skilled in Unity 2d, 3d, Multiplayer,AR/VR,C#
          ,C++,Scripting and animation .Proven ability to lead teams and deliver projects on time
          collaborating effectively in team environments. Passionate about learning new technologies
          and staying up-to-date with industry trends.
          </p>
        </div>
      </div>

      <About />
    </section>
  );
};

export default Hero;
