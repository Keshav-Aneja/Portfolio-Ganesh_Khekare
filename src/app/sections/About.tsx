import React from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import { experienceData } from "../data/experience";
import ExperienceBox from "../components/ExperienceBox";
import { qualificationData } from "../data/qualification";
import QualificationBox from "../components/QualificationBox";
import Image from "next/image";
const About = () => {
  return (
    <div className="w-full h-full font-poppins">
      <Heading title={"About"} />
      <div className="description w-full lg:w-[80%] text-xs md:text-sm lg:text-base">
        <Image
          src="/avatar.png"
          alt="Ganesh Khekare"
          width={300}
          height={300}
          className="w-36 md:mr-4 mb-4 md:float-left mx-auto"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quis
          mollitia ipsa perspiciatis itaque nisi ducimus commodi? Dolore earum
          delectus culpa et praesentium beatae, adipisci dolores, placeat id
          animi quae? Eos impedit dolorum et unde nostrum, hic incidunt corporis
          quasi ad voluptate dignissimos neque eius quod obcaecati dolorem odit
          soluta.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod
          laborum nostrum eius illo sunt modi amet aut, nulla numquam.
        </p>
      </div>
      <div className="w-full mt-8">
        <Subheading title={"Academic Experience (13 Years)"} />
        <div className="w-full flex flex-col gap-4">
          {experienceData.map((data, index) => (
            <ExperienceBox
              name={data.name}
              startDate={data.startDate}
              endDate={data.endDate}
              position={data.position}
              currentlyWorking={data.currentlyWorking}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="w-full mt-8">
        <Subheading title={"Educational Qualification"} />
        <div className="w-full flex flex-col gap-4">
          {qualificationData.map((data, index) => (
            <QualificationBox data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="w-full mt-8">
        <Subheading title={"Domain Knowledge"} />
        <div className="w-full flex flex-wrap justify-between">
          <span className="w-[48%] bg-background text-sm md:text-base lg:text-lg px-4 py-2 rounded-lg text-center font-medium mb-2 cursor-pointer hover:scale-95 transition-all duration-100 ease-linear flex items-center justify-center">
            Networking
          </span>
          <span className="w-[48%] bg-background text-sm md:text-base lg:text-lg px-4 py-2 rounded-lg text-center font-medium mb-2 cursor-pointer hover:scale-95 transition-all duration-100 ease-linear">
            Artificial Intelligence
          </span>
          <span className="w-[48%] bg-background text-sm md:text-base lg:text-lg px-4 py-2 rounded-lg text-center font-medium mb-2 cursor-pointer hover:scale-95 transition-all duration-100 ease-linear">
            Machine Learning
          </span>
          <span className="w-[48%] bg-background text-sm md:text-base lg:text-lg px-4 py-2 rounded-lg text-center font-medium mb-2 cursor-pointer hover:scale-95 transition-all duration-100 ease-linear">
            Data Science
          </span>
          <span className="w-[48%] bg-background text-sm md:text-base lg:text-lg px-4 py-2 rounded-lg text-center font-medium mb-2 cursor-pointer hover:scale-95 transition-all duration-100 ease-linear">
            Internet of Things
          </span>
          <span className="w-[48%] bg-background text-sm md:text-base lg:text-lg px-4 py-2 rounded-lg text-center font-medium mb-2 cursor-pointer hover:scale-95 transition-all duration-100 ease-linear">
            VANET
          </span>
          <span className="w-[48%] bg-background text-sm md:text-base lg:text-lg px-4 py-2 rounded-lg text-center font-medium mb-2 cursor-pointer hover:scale-95 transition-all duration-100 ease-linear">
            Anaconda
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
