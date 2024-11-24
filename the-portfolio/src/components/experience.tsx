"use client";

import { formatDate } from "@/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading, PerspectiveText, SlideIn, Transition } from "./ui";

// Hardcoded experience data
const experienceData = [
  {
    _id: "1",
    jobTitle: "Lead Software Engineer/CTO",
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-12-01"),
    company_name: "Dyne Research",
    jobLocation: "Remote",
    summary: "Worked on and led a full-stack development team to:",
    bulletPoints: [
      "Develop responsive websites optimized for various devices, prioritizing efficiency and accessibility across all platforms.",
      "Apply in-depth expertise in Python, Django, JavaScript, HTML, and CSS to create efficient web solutions, focusing on optimal user experience.",
      "Use Django Rest Framework to build an Employee Management System with RESTful APIs for efficient record and employee management.",
    ],
    forEducation: false,
    enabled: true,
    sequence: 1,
  },
  {
    _id: "2",
    jobTitle: "Lead Full-Stack Developer",
    startDate: new Date("2023-08-07"),
    endDate: new Date("2024-05-01"),
    company_name: "Youth Mentorship Project",
    jobLocation: "Remote",
    summary: "Assisted in building backend APIs and infrastructure by:",
    bulletPoints: [
      "Utilizing Python and Django to develop the backend of the website, building RESTful APIs to manage data and integrate with front-end.",
      "Playing a key role in implementing core features, ensuring seamless functionality and performance.",
      "Troubleshooting backend issues to optimize data flow and enhance system efficiency.",
    ],
    forEducation: false,
    enabled: true,
    sequence: 2,
  },
];

const Experience = () => {
  const experience = experienceData
    .filter((exp) => !exp.forEducation && exp.enabled)
    .sort((a, b) => a.sequence - b.sequence);

  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="relative pb-20">
      <span className="blob absolute top-[20%] left-0 w-1/3 h-5/6 blur-[100px] -z-10" />
      <SectionHeading className="pl-4 md:px-12 py-20">
        <SlideIn className="text-white/40">Experience</SlideIn>
        <br />
        <SlideIn>History</SlideIn>
      </SectionHeading>
      <div>
        {experience.map((exp, index) => (
          <Transition
            key={exp._id}
            className="py-4 md:py-8 border-b border-white/10 hover:bg-white/5 px-2 md:px-12"
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <div className="flex items-center justify-between md:gap-8">
              <span className="max-md:hidden">0{index + 1}</span>
              <div className="md:text-5xl text-xl md:font-semibold flex-1">
                <PerspectiveText hover={hover === index}>
                  {exp.jobTitle}
                </PerspectiveText>
              </div>
              <div className="max-md:text-sm max-md:flex flex-col text-foreground/50">
                <span className="italic">
                  {formatDate(exp.startDate).month +
                    ", " +
                    formatDate(exp.startDate).year}
                </span>
                <span className="max-md:hidden">{" - "}</span>
                <span className="italic">
                  {formatDate(exp.endDate).month +
                    ", " +
                    formatDate(exp.endDate).year}
                </span>
              </div>
            </div>
            <div className="md:pl-12 py-2 text-foreground/50 max-md:text-sm flex items-center justify-between">
              <span>{exp.company_name}</span>
              <span>{exp.jobLocation}</span>
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: hover === index ? "100%" : 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <p className="text-foreground/60 py-2">{exp.summary}</p>
              <ul className="list-disc list-inside">
                {exp.bulletPoints.map((point, i) => (
                  <li key={i} className="text-foreground/80 max-md:text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Experience;
