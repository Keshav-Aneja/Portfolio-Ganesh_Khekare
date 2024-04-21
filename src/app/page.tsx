"use client";
import { useState } from "react";
import BaseWrapper from "./wrappers/BaseWrapper";
import MainWrapper from "./wrappers/MainWrapper";
import SidebarWrapper from "./wrappers/SidebarWrapper";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import { ReactLenis } from "@studio-freight/react-lenis";
import Research from "./sections/Research";
import Patents from "./sections/Patents";
import Projects from "./sections/Projects";
import Awards from "./sections/Awards";
import GalleryPage from "./sections/GalleryPage";
import SpecialistService from "./sections/SpecialistServices";
export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 0.5,
          smoothWheel: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
        }}
      >
        <BaseWrapper>
          <SidebarWrapper>
            <Sidebar tabIndex={tabIndex} setTabIndex={setTabIndex} />
          </SidebarWrapper>
          <MainWrapper>
            {tabIndex === 0 && <About />}
            {tabIndex === 1 && <Research />}
            {tabIndex === 2 && <Patents />}
            {tabIndex === 3 && <Projects />}
            {tabIndex === 4 && <Awards />}
            {tabIndex === 5 && <SpecialistService />}
            {tabIndex === 6 && <GalleryPage />}
          </MainWrapper>
        </BaseWrapper>
      </ReactLenis>
    </>
  );
}
