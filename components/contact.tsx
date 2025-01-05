"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const sendEmail = (senderEmail:any, message:any) => {
    const templateParams = {
      sender_email: senderEmail,
      message: message,
    };
  
    emailjs.send(
      "service_ycsveyi", // Your EmailJS Service ID
      "template_2tte92p", // Your EmailJS Template ID
      templateParams,
      "1XTHqK9V6jcrhsah8" // Your EmailJS User ID
    )
    .then((response) => {
      toast.success("Email sent successfully!");
      // console.log("Email sent successfully!", response);
    })
    .catch((error) => {
      toast.error("Email sent successfully!");
      // console.log("Error sending email", error);
    });
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    const senderEmail = event.target.senderEmail.value;
    const message = event.target.message.value;
  
    sendEmail(senderEmail, message);
  };
  

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jahanzaib.solver@gmail.com">
          {/* jahanzaib.solver@gmail.com */}
          rajajahanzaib1999@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        // action={async (formData) => {
        //   const { data, error } = handleSubmit(formData);

        //   if (error) {
        //     toast.error(error);
        //     return;
        //   }

        //   toast.success("Email sent successfully!");
        // }}\
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
