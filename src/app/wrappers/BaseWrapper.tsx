import React, { ReactNode } from "react";

const BaseWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-[100vh] lg:min-h-[200vh] bg-background flex flex-col lg:flex-row lg:justify-around">
      {children}
    </div>
  );
};

export default BaseWrapper;
