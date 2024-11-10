import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import WFG from "../public/WFG.png";
import BO from "../public/BO.png";
import TOS from "../public/TOS.png";
import TH from "../public/TH.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors in Computer Science",
    location: "Islamabad, Pakistan",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Islamabad, Pakistan",
    description:
      "Currently working as a Front-End Developer, where I specialize in creating dynamic and responsive user interfaces. I have continuously upskilled to transition into a full-stack role, broadening my expertise in both front-end technologies and back-end development.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Full-Stack Developer / AI Engineer",
    location: "Islamabad, Pakistan",
    description:
      "As a Full-Stack Developer and AI Engineer, I am currently freelancing and working on hobby projects focused on developing robust web applications. My tech stack includes React, Next.js, TypeScript, Tailwind CSS, Prisma, MongoDB, and AI technologies. I am passionate about integrating AI to enhance user experiences and deliver innovative solutions.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },

] as const;

export const projectsData = [
  {
    title: "WoodenFurnitureGallery",
    description:
      "In my role as a Full-Stack Engineer, I developed WoodenFurnitureGallery, an e-commerce platform where users can purchase a wide range of furniture for home and office. I implemented complete online purchase functionality, including user account management and order placement, ensuring a seamless shopping experience.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn", "Framer Motion", "PostgreSQL", "Prisma"],
    imageUrl: WFG,
  },
  {
    title: "TicketsOnSale",
    description:
      "TicketsOnSale is an online ticket booking application for concerts and events. Collaborating with a professional frontend team, I played a key role in redesigning the homepage UI and enhancing the ticket page with an interactive map of events, venues, and concerts. This project includes advanced features like filtering, sorting, and pagination to improve the user experience.",
    tags: ["React", "TypeScript", "Next.js", "Chakra UI"],
    imageUrl: TOS,
  },
  {
    title: "Bookonline",
    description:
      "As a Frontend Engineer, I contributed to the development of Bookonline, a platform that allows users to seamlessly book hotel rooms. My focus was on creating a responsive and user-friendly interface using modern web technologies.",
    tags: ["React", "TypeScript", "Next.js", "Chakra UI", "Framer Motion"],
    imageUrl: BO,
  },
  {
    title: "TheHunt",
    description:
      "TheHunt is a US-based marketplace that empowers users to create their companies, manage sales, and list products. As a Frontend Engineer, I contributed to building a user-friendly interface that allows users to add collaborators to their companies, streamlining the collaborative process.",
    tags: ["React", "Next.js", "TypeScript", "Chakra UI", "Framer Motion"],
    imageUrl: TH,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Django",
  "FastAPI",
  "Flask",
  "Framer Motion",
  "Chakra UI",
  "Material UI",
  "Shadcn",
] as const;
