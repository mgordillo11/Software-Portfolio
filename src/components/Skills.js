import Image from "next/image";
import React from "react";
import ReactImage from "../../public/images/skills/react.png";
import TypeScript from "../../public/images/skills/typescript.png";
import NextJS from "../../public/images/skills/nextjs.png";
import Github from "../../public/images/skills/github.png";
import Tailwind from "../../public/images/skills/tailwind.png";
import Vue from "../../public/images/skills/vue.png";
import Java from "../../public/images/skills/java.png";
import Supabase from "../../public/images/skills/supabase.png";

import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const Skills = () => {
  // Initialize mode from localStorage or a default value
  const [mode] = useThemeSwitch();

  const techStack = [
    {
      id: 1,
      src: TypeScript,
      title: "TypeScript",
      style: "shadow-blue-600", // TypeScript's brand color is a shade of blue
    },
    {
      id: 2,
      src: Java,
      title: "Java",
      style: "shadow-red-600", // Java's brand color is a shade of red
    },
    {
      id: 3,
      src: NextJS,
      title: "Next JS",
      style: "shadow-gray-800", // Next.js logo is mostly black, so a dark shadow would suit
    },
    {
      id: 4,
      src: ReactImage,
      title: "React Native",
      style: "shadow-blue-700", // React Native can use a slightly different shade for distinction
    },
    {
      id: 5,
      src: Vue,
      title: "Vue",
      style: "shadow-green-600", // Vue.js's brand color is a darker shade of green
    },
    {
      id: 6,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-teal-400", // Tailwind CSS uses a teal color in its branding
    },
    {
      id: 7,
      src: Supabase,
      title: "Supabase",
      style: "shadow-green-500", // Supabase's brand color is a shade of green
    },
    {
      id: 8,
      src: Github,
      title: "Github",
      style: "shadow-gray-700", // GitHub's logo is primarily grayscale
    },
  ];

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>

      {/* Change the text to black if the current theme mode is in Light Moe */}
      <div
        className="mx-auto p-4 flex flex-col justify-center w-full h-full text-black
      dark:text-light
      "
      >
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
