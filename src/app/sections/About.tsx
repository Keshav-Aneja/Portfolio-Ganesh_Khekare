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
      <div className="description w-full lg:w-[80%] text-xs md:text-sm lg:text-sm">
        <Image
          src="/ganesh-khekare.png"
          alt="Ganesh Khekare"
          width={300}
          height={300}
          className="w-36 md:mr-4 mb-4 md:float-left mx-auto rounded-lg"
        />
        <p>
          Dr. Ganesh Khekare is currently working as an Associate Professor in
          the Department of Computer Science & Engineering at Vellore Institute
          of Technology, Vellore, India (Deemed University - NIRF Rank 11). He
          has done BE, ME, and PhD in Computer Science and Engineering. He is a
          postdoc from the University of Lincoln, Malaysia. He is UGC net exam
          qualified with 98.15 percentiles. Recently he received the most
          prestigious IEI Young Engineers Award. He has been a member of
          different Societies and professional bodies like ACM since 2014, a
          lifetime member of the ISTE, IEI, ISDS, and IEEE Senior Member, IAENG,
          IFERP, and IERD.
        </p>
        <br />
        <p>
          He has more than 14 years of teaching and research experience. His
          main research work focuses on Data Science, Artificial Intelligence
          and Machine Learning, Internet of Things, Networking, Blockchain, etc.
          He has published more than 70 research articles in reputed
          international journals and conferences including Elsevier, ACM,
          Springer, IEEE, Taylor & Francis, Wiley, Bentham Science, IGI Global,
          Inderscience, etc. He has more than 400 Google Scholar citations. He
          has done 5 patents and 10 copyrights including international Canadian
          copyright. He has received a Grant of 5.5 lakhs. Guided more than 50
          UG as well as PG research projects, currently guiding 5 PhD research
          scholars.
        </p>
        <br />
        <p>
          He has organized numerous international conferences, seminars, FDPs,
          and workshops. He has delivered several invited talks. He is an
          editorial board member, international advisory board member, associate
          editor, and guest editor for many International Journals. He serves as
          a reviewer for various reputed International Journals and Conferences.
          He participated in many international conferences worldwide as a core
          organizing committee member, technical program committee member, and
          Session Chair. Served as a resource person for more than 100 national
          and international events. Certified with more than 50 training
          programs from various NITs, IITs, and reputed industries like TCS,
          Persistent, etc. on the latest technologies.
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
