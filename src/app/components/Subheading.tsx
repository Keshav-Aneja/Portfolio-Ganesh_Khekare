import React from "react";

const Subheading = ({ title }: { title: string }) => {
  return (
    <div className="w-full py-4 flex items-center gap-2 lg:gap-4 my-4">
      <div className="h-[3px] lg:h-[4px] w-[10%] md:w-[5%] bg-primary"></div>
      <h1 className="text-lg md:text-2xl lg:text-3xl font-roboto font-bold">
        {title}
      </h1>
    </div>
  );
};

export default Subheading;
