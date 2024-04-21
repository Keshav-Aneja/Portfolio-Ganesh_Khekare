import React, { ReactNode } from "react";

const MainWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full lg:w-[70%] py-20">
      <div className="bg-white w-full h-full rounded-xl p-10">{children}</div>
    </div>
  );
};

export default MainWrapper;
