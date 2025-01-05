import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import CB from "../assets/images/CB.png"
import AF from "../assets/images/af.png";
import BO from "../assets/images/bo.png";
import TOS from "../assets/images/tos.png";
import TH from "../assets/images/th.png";


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
      "Specializing in AI-related solutions, I focus on creating dynamic and responsive user interfaces. I have continuously upskilled to transition into a full-stack role, broadening my expertise in both front-end technologies and AI-powered solutions with AI integrations.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Full-Stack Developer / AI Engineer",
    location: "Islamabad, Pakistan",
    description:
      "As a Full-Stack Developer and AI Engineer, I am currently freelancing and working on projects focused on developing robust AI-powered web applications. My tech stack includes Python, ML, React, Next.js, TypeScript, Tailwind CSS, Prisma, MongoDB, and AI technologies. I am passionate about integrating AI to enhance user experiences and deliver innovative solutions.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },

] as const;

export const projectsData = [
  {
    title: "Career Counselling Chatbot",
    description:
      "Career Counselling Chatbot is an AI-driven solution built with OpenAI and Python, designed to deliver personalized career guidance in a conversational and engaging manner.It leverages advanced language models to provide real- time, structured advice, formatted in HTML for seamless integration into web applications.This innovative chatbot makes career planning approachable, ensuring users feel supported and confident in their professional journey.",
    tags: ["Python", "OpenAI", "FastAPI", "React.js", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    imageUrl: CB,
  },
  {
    title: "Alfalah Furniture",
    description:
      "In my role as a Full-Stack Engineer, I developed Alfalah Furniture, an e-commerce platform where users can purchase a wide range of furniture for home and office. I implemented complete online purchase functionality, including user account management and order placement, ensuring a seamless shopping experience.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn", "Framer Motion", "PostgreSQL", "Prisma"],
    imageUrl: AF,
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
  "Python",
  "Artificial Intelligence",
  "Machine Learning",
  "OpenAI Integrations",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Deep Learning",
  "Django",
  "FastAPI",
  "Flask",
  "Framer Motion",
  "Chakra UI",
  "Material UI",
  "Shadcn",
] as const;
