import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <div className="w-full py-4 flex items-center gap-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-roboto font-bold">
        {title}
      </h1>
      <div className="h-[3px] lg:h-[4px] flex-grow bg-primary"></div>
    </div>
  );
};

export default Heading;
