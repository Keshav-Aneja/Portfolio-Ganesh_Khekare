import React, { ReactNode } from "react";

const MainWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full px-3 md:px-6 lg:px-0 mx-auto lg:w-[70%] py-4 lg:py-20">
      <div className="bg-white w-full h-full rounded-xl p-4 md:p-10">
        {children}
      </div>
    </div>
  );
};

export default MainWrapper;
