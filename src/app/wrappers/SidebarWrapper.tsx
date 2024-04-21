import React, { ReactNode } from "react";

const SidebarWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full lg:w-[27%] lg:min-h-screen h-fit sticky top-0 left-0 px-3 md:px-6 lg:px-10 py-6 lg:py-20">
      {children}
    </div>
  );
};

export default SidebarWrapper;
