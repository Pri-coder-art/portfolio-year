import React from "react";
import { onRamp } from "../assets";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
const ProjectVideoCard = ({ media }) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", 1 * 0.5, 0.75)}
      className="rounded-[10px] shadow-card"
    >
      <div className="relative w-full h-full">
        <video
          className="w-full h-full object-contain rounded-[10px]"
          controls
          muted
        >
          <source src={media} type="video/mp4" />
        </video>
      </div>
    </motion.div>
  );
};
const WorksVideos = () => {
  return (
    <div className="w-4/5 h-[400px] mt-[-20px]">
      <ProjectVideoCard media={onRamp} />
    </div>
  );
};

export default WorksVideos;
