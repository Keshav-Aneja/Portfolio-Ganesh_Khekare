import React from "react";

const Subheading = ({ title }: { title: string }) => {
  return (
    <div className="w-full py-4 flex items-center gap-4 my-4">
      <div className="h-[4px] w-[5%] bg-primary"></div>
      <h1 className="text-3xl font-roboto font-bold">{title}</h1>
    </div>
  );
};

export default Subheading;
