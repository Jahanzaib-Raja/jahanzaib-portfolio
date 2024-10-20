"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi, I’m <span className="font-medium">Jahanzaib</span>, a{" "}
        <span className="font-medium">full-stack developer</span> with a deep
        passion for crafting seamless digital experiences and pushing the
        boundaries of technology. My expertise spans{" "}
        <span className="font-medium">
          Next.js, React, TypeScript, Node.js, PostgreSQL,
        </span>{" "}
        and <span className="font-medium">Artificial Intelligence</span>, and I
        take pride in building robust, scalable web applications.
      </p>

      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for programming. What I love most about programming is
        the <span className="italic">problem-solving aspect</span>. The thrill
        of finally figuring out a solution to a complex challenge drives me
        forward.
      </p>

      <p className="mb-3">
        I have expertise and experience in the development of{" "}
        <span className="font-medium">e-commerce</span> and{" "}
        <span className="font-medium">sales applications</span>, where I focus
        on creating user-friendly interfaces and optimizing backend
        functionality to enhance user experience and drive conversions.
      </p>

      <p className="mb-3">
        I have built full-stack projects, including an{" "}
        <span className="font-medium">e-commerce app</span> using{" "}
        <span className="font-medium">Next.js</span> and{" "}
        <span className="font-medium">Prisma</span>. I have also contributed to
        the <span className="font-medium">frontend development</span> of{" "}
        <span className="font-medium">ticket-booking</span> and{" "}
        <span className="font-medium">hotel-room booking applications</span>{" "}
        built with <span className="font-medium">Next.js</span>, ensuring smooth
        and user-friendly experiences for end users.
      </p>

      <p className="mb-3">
        Beyond web development, I have worked on{" "}
        <span className="font-medium">AI development projects</span>, such as{" "}
        <span className="font-medium">TensorFlow-based models</span> for image
        detection and chatbot integrations using models like{" "}
        <span className="font-medium">OpenAI</span> and{" "}
        <span className="font-medium">LangChain</span>. I am passionate about
        merging AI and web technologies to deliver smarter, more efficient
        solutions.
      </p>

      <p className="mb-3">
        I am committed to delivering{" "}
        <span className="font-medium">top-notch solutions</span> while staying
        aligned with the latest technology trends. Over time, I have developed a{" "}
        <span className="font-medium">sharp eye for detail</span> and a{" "}
        <span className="font-medium">problem-solving mindset</span>, enabling
        me to create innovative solutions even under tight deadlines.
      </p>

      <p className="mb-3">
        Whether it is <span className="font-medium">backend development</span>,{" "}
        <span className="font-medium">frontend interfaces</span>, or{" "}
        <span className="font-medium">AI-powered tools</span>, my work reflects
        my drive to stay at the forefront of technology. I continuously seek
        ways to integrate machine learning with web platforms, creating
        meaningful solutions that bring real impact.
      </p>

      <p>
        I believe in <span className="font-medium">discipline</span>,{" "}
        <span className="font-medium">continuous learning</span>, and building
        solutions that unlock new potential for businesses through modern web
        technologies and <span className="font-medium">AI integration</span>.
      </p>
    </motion.section>
  );
}
