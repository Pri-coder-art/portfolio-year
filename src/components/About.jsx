import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styles } from "../styles";
import { githubUrl, linkedInUrl, services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { profilePic } from "../assets";

// import {PritiKumari} from "../assets"

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const ProfileCard = ({ pic }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-1 px-1 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={pic}
          alt="web-development"
          className="w-full h-full object-contain rounded-[20px]"
        />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="">
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2
          className={`${styles.sectionHeadTextRb} text-center mb-7 tracking-widest`}
        >
          About
        </h2>
      </motion.div>
      <div className="flex mt-8 justify-center light-bg py-10 rounded-[20px]">
        <ProfileCard pic={profilePic} />
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 ml-5 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here's a little something about myself. I love working with
          cutting-edge technologies. Enthusiastic about computer science. I am
          always hungry for learning and to improve as a person. Skilled in javascript,
          HTML, CSS and has a keen interest in Frontened Technology. Apart from
          this socially, I am an introvert and a real-life ambivert.
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="flex py-2 items-center justify-start banner__social"
          >
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <LinkedInIcon className="text-secondary social-icons" />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="text-secondary social-icons" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, "about");
