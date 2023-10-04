import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import ReactImage from "../../public/images/skills/react.png";
import HTML from "../../public/images/skills/html.png";
import CSS from "../../public/images/skills/css.png";
import JavaScript from "../../public/images/skills/javascript.png";
import NextJS from "../../public/images/skills/nextjs.png";
import Github from "../../public/images/skills/github.png";
import Tailwind from "../../public/images/skills/tailwind.png";

const Skills = () => {
  const techStack = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: NextJS,
      title: "NextJS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];

  const ref = useRef(null);
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>

      <image src={HTML} />

      <div className="mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techStack.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <Image src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
