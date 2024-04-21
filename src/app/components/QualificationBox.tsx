import React from "react";
interface Props {
  data: {
    title: string;
    description: string;
    year: string;
    pursuing: boolean;
    score: string;
    place: string;
  };
}
const QualificationBox = ({ data }: Props) => {
  return (
    <div className="w-full flex flex-col font-poppins">
      <div className="w-full flex text-white text-xs md:text-sm lg:text-base">
        <span className="bg-primary px-2 md:px-4 py-1 md:py-2 rounded-l-lg rounded-bl-none">
          {data.title}
        </span>
        <span className="bg-primary px-2 md:px-4 py-1 md:py-2 rounded-r-lg rounded-br-none">
          {data.pursuing === true ? "Pursuing" : data.year}
        </span>
      </div>
      <div className="w-full flex flex-col bg-background p-2 rounded-lg rounded-tl-none">
        <p className="text-sm lg:text-lg font-medium">
          {data.pursuing === true ? "" : data.score} {data.description}
        </p>
        <p className="text-xs lg:text-sm">{data.place}</p>
      </div>
    </div>
  );
};

export default QualificationBox;
