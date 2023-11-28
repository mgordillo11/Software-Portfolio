import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Engineer Intern"
            company="BetterKritic"
            companyLink="https://google.com"
            time="Aug 2023 - November 2023"
            address="Remote"
            work="I have integrated external platforms to enhance storage, security, and API usage, while also contributing to UI/UX innovations that streamline user experiences and boost productivity."
          />

          <Details
            position="Back-End and Low-Code Developer"
            company="BYU OIT"
            companyLink="https://oit.byu.edu/"
            time="Jan 2022 - July 2023"
            address="Provo, UT"
            work="I contributed to the maintenance of existing university applications that supported student success throughout their academic journeys. I also played a key role in the development of new applications, modernizing and enhancing the way students manage their data."
          />

          <Details
            position="Software Engineer"
            company="Roofworx"
            companyLink="https://roofworx.io/"
            time="August 2023 - April 2023 "
            address="Remote"
            work="Altered and contributed to their backend services that involved Google Cloud Platform Services, Firebase, and Node.js. I also worked on their frontend services that involved React and Typescript."
          />

          <Details
            position="Computer Science Instructor"
            company="Juni Learning"
            companyLink="https://junilearning.com/"
            time="May 2023 - Jul 2023 "
            address="Remote"
            work="As a computer science instructor, I conducted personalized online lessons for students aged 8-18, tailoring the curriculum to their unique needs and interests. I upheld consistent communication with parents, delivering progress updates and sharing learning assessment results, all while meticulously documenting student records across diverse courses and skill levels."
          />

          <Details
            position="On-Campus Housing Resident Assistant"
            company="BYU"
            companyLink="https://housing.byu.edu/secure/services/c_main/default.aspx"
            time="August 2021 - December 2021"
            address="Provo, UT"
            work="I assisted in organizing community events to enhance the undergraduate experience for the group I led, fostering stronger social skills and connections among its members."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
