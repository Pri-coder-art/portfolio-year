import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  codeB,
  BS,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },

  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Enginner (SDE-1) - Frontend",
    company_name: "Bombay Softwares",
    icon: BS,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    points: [
      "Developed a user interface for a PMO tool to streamline the management of project sprints, phases, resources.",
      "Successfully implemented secure user authentication and authorization mechanisms in the PMO tool. ",
      "Developed a feature to manage multiple projects in a single tool, significantly enhancing the project manager's efficiency in overseeing projects. Wrote scalable, type-safe code for better maintainability.",
      "Built a dynamic Data Table component with customizable columns for efficiently displaying data on the UI.",
      "Working in an Agile programming environment involves defining stories, estimating tasks, and planning sprints"
      ,
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Bombay Softwares",
    icon: BS,
    iconBg: "#383E56",
    date: "August 2022 - Sep 2023",
    points: [
      "Developed metadata using Python and an in-house scripting language to optimize data processing workflows and improve system integration.",
      "Processed and transformed BlazePose data for machine learning models and analysis, ensuring accurate feature extraction.",
      "Performed data cleaning and integrity maintenance, identifying inconsistencies and ensuring reliable.",
      "Calculated and implemented exercise tolerances to optimize performance metrics and enhance system accuracy in monitoring and evaluating user exercises.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const onRampContent = [
  "The On-Ramp feature allows users to buy GARI (currency) through the Chingari app.",
  "The integration of the On-Ramp feature into the Chingari app has significantly boosted user engagement by 13%.",
  "The Chingari app has been downloaded by over 100 Million users exclusively from the Play Store.",
  "The On-Ramp feature is built using the ONMETA platform.",
];

const linkedInUrl = "https://www.linkedin.com/in/priti-kumari-9975101b4/";
const githubUrl = "https://github.com/Pri-coder-art";

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  onRampContent,
  linkedInUrl,
  githubUrl,
};
