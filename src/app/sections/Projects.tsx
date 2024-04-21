import React from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Table from "../components/Table";
import WorkshopsAttended from "../components/WorkshopsAttended";
import WorkshopsOrganized from "../components/WorkshopsOrganized";
const Projects = () => {
  return (
    <div className="w-full h-full font-poppins">
      <Heading title={"Projects & Workshops"} />
      <div className="w-[80%]">
        The Projects section offers a curated collection of my research
        endeavors and guided projects, representing a diverse spectrum of
        innovation and exploration. From cutting-edge research ventures to
        hands-on guided projects, this section showcases my dedication to
        advancing knowledge and fostering impactful solutions.
      </div>
      <Subheading title="Research Projects" />
      <section className="grid grid-cols-3 gap-4">
        <div className="bg-background rounded-lg p-4">
          <h1 className="text-xl font-medium text-center mb-4">PostDoc</h1>
          <p className="text-sm">
            An Empirical Analysis of Multi-Agent Reinforcement Learning
            Algorithms for Better Decision Making
          </p>
        </div>
        <div className="bg-background rounded-lg p-4">
          <h1 className="text-xl font-medium text-center mb-4">PhD</h1>
          <p className="text-sm">
            An Empirical Analysis of Multi-Agent Reinforcement Learning
            Algorithms for Better Decision Making
          </p>
        </div>
        <div className="bg-background rounded-lg p-4">
          <h1 className="text-xl font-medium text-center mb-4">ME</h1>
          <p className="text-sm">
            A Design of Emergency System for Intelligent Traffic System using
            VANET
          </p>
        </div>
      </section>
      <Subheading title="Guided Projects" />
      {<Table data={guidedProjects} countPerRow={4} />}
      <Subheading title="STTP/Conferences/Workshops Organized" />
      {<Table data={workshopOrganized} countPerRow={5} />}
      <div className="publication-details">
        <WorkshopsOrganized />
      </div>
      <Subheading title="FDP/ Workshops/Training: Attended/Passed" />
      {<Table data={workshopAttended} countPerRow={5} />}
      <div className="publication-details">
        <WorkshopsAttended />
      </div>
    </div>
  );
};

export default Projects;

const guidedProjects = {
  headers: [
    "PhD Student Guiding",
    "PG Research Project Guided",
    "UG Research Project Guided",
    "Industry Project Guided",
  ],
  row: ["05", "02", "25", "17"],
};

const workshopOrganized = {
  headers: [
    "International Conferences",
    "National Conferences",
    "STTP",
    "FDP",
    "Workshops",
  ],
  row: ["6", "4", "1", "1", "3"],
};
const workshopAttended = {
  headers: [
    "Industry Training",
    "NPTEL",
    "ATAL FDP",
    "AICTE",
    "IITs",
    "NITs",
    "GHRCE",
    "VIT",
    "Other",
  ],
  row: ["6", "4", "2", "4", "8", "1", "13", "5", "4"],
};
