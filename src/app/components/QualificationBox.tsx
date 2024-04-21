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
      <div className="w-full flex text-white">
        <span className="bg-primary px-4 py-2 rounded-l-lg rounded-bl-none">
          {data.title}
        </span>
        <span className="bg-primary px-4 py-2 rounded-r-lg rounded-br-none">
          {data.pursuing === true ? "Pursuing" : data.year}
        </span>
      </div>
      <div className="w-full flex flex-col bg-background p-2 rounded-lg rounded-tl-none">
        <p className="text-lg font-medium">
          {data.pursuing === true ? "" : data.score} {data.description}
        </p>
        <p className="text-sm">{data.place}</p>
      </div>
    </div>
  );
};

export default QualificationBox;
