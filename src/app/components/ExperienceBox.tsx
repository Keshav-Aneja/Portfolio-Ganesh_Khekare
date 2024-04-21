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
    <div className="w-full bg-background min-h-fit h-16 lg:h-20 rounded-lg flex font-poppins overflow-hidden flex-col md:flex-row">
      <div className="h-full bg-primary w-full md:w-[15%] text-white font-medium flex items-center justify-center text-xs lg:text-sm py-1 md:py-0">
        <p className="hidden md:block">
          {startDate} <br /> -{" "}
          {currentlyWorking === true ? `${currentYear}*` : `${endDate}`}
        </p>
        <p className="md:hidden">
          {startDate} -{" "}
          {currentlyWorking === true ? `${currentYear}*` : `${endDate}`}
        </p>
      </div>
      <div className="flex flex-col h-full justify-center px-2 md:px-10">
        <p className="text-base md:text-xl lg:text-2xl font-medium">
          {position}
        </p>
        <p className="text-xs md:text-sm lg:text-base">{name}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;
