import React from "react";
import Heading from "../components/Heading";
import Table from "../components/Table";
import ResourcePersonList from "../components/ResourcePersonList";
const SpecialistService = () => {
  return (
    <div className="w-full h-full font-poppins">
      <Heading title={"Specialist Service"} />
      <Table data={resourcePersonData} />
      <div className="resource-person-details w-full">
        <ResourcePersonList />
      </div>
    </div>
  );
};

export default SpecialistService;

const resourcePersonData = {
  headers: [
    "Editor of Journal",
    "Editor of Journal",
    "SCM / TPCM / Reviewer / SC",
    "PhD Thesis Review / DRC",
    "Guest Lecture Delivered",
    "Keynote Speaker",
    "Judge / Evaluator",
    "BoS Expert",
    "Advisory Board Member",
    "Government Duties",
  ],
  row: [
    "4",
    "1",
    "IJ : 15, IC: 50, Book: 1",
    "6",
    "5",
    "4",
    "2",
    "2",
    "2",
    "2",
  ],
};
