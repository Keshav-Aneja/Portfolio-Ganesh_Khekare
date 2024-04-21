import React from "react";
interface Props {
  name: string;
  startDate: string;
  endDate: string;
  currentlyWorking?: boolean;
  position: string;
}
const ExperienceBox = ({
  name,
  startDate,
  endDate,
  currentlyWorking,
  position,
}: Props) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="w-full bg-background h-20 rounded-lg flex font-poppins overflow-hidden">
      <div className="h-full bg-primary w-[15%] text-white font-medium flex items-center justify-center text-sm">
        {startDate} <br />-{" "}
        {currentlyWorking === true ? `${currentYear}*` : `${endDate}`}
      </div>
      <div className="flex flex-col h-full justify-center px-10">
        <p className="text-2xl font-medium">{position}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;
