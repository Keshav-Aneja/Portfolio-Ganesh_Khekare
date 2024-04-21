import React, { ReactNode } from "react";

const SidebarWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[27%] min-h-screen h-fit   sticky top-0 left-0 px-10 py-20">
      {children}
    </div>
  );
};

export default SidebarWrapper;
