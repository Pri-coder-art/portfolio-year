import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { onRampContent, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import WorksVideos from "./WorksVideos";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-20">
        <h2
          className={`${styles.sectionHeadTextRb} text-center tracking-widest `}
        >
          My Work
        </h2>
      </motion.div>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText}`}>My work</p> */}
      </motion.div>
      <div className="w-full m-5 ml-0 flex gap-10 mb-10">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5  leading-[30px]"
        >
          <h1
            className={`text-white md:text-[40px] sm:text-[30px] xs:text-[20px] text-[30px] capitalize font-bold font-family-rb leading-tight`}
          >
            On-Ramp Feature Integration into Chingari App.
          </h1>
          <ul className="mt-3 ml-10 text-secondary text-[17px] max-w-4xl leading-[30px] list-disc ">
            {onRampContent.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </motion.div>
        <WorksVideos />
      </div>

      <div className="w-full">
        {/* {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))} */}
        {/* <WorksVideos /> */}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
