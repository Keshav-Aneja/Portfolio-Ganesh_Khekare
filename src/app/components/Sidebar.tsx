import React, { ReactNode } from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { HiBeaker } from "react-icons/hi";
import { BiSolidNavigation } from "react-icons/bi";
import { MdLibraryBooks } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdOutlineHomeRepairService } from "react-icons/md";
const Sidebar = ({
  tabIndex,
  setTabIndex,
}: {
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="w-full bg-white lg:min-h-[80vh] h-full rounded-xl relative hidden lg:block">
      <div className="w-32 lg:w-[50%] aspect-square rounded-xl overflow-hidden absolute left-1/2 -translate-x-1/2 -top-12 bg-white p-2 shadow-md">
        <Image
          src="/ganesh-khekare.png"
          alt="Ganesh Khekare"
          width={300}
          height={300}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="hidden lg:block blank w-[40%] aspect-square"></div>
      <div className=" blank w-[100%] h-24"></div>
      <div className="sidebar-content w-full text-center flex flex-col gap-4">
        <h1 className="text-2xl font-roboto font-bold">Dr. Ganesh Khekare</h1>
        <div className="socials w-full flex justify-center gap-2">
          <div className="p-1 lg:p-3 bg-background rounded-lg hover:bg-primary  w-10 lg:w-[12%] aspect-square group transition-all duration-100 ease-linear cursor-pointer">
            <FaFacebookF className="group-hover:text-white w-full h-full" />
          </div>
          <div className="p-1 lg:p-3 bg-background rounded-lg hover:bg-primary  w-10 lg:w-[12%] aspect-square group transition-all duration-100 ease-linear cursor-pointer">
            <FaTwitter className="group-hover:text-white w-full h-full" />
          </div>
          <div className="p-1 lg:p-3 bg-background rounded-lg hover:bg-primary w-10 lg:w-[12%] aspect-square group transition-all duration-100 ease-linear cursor-pointer">
            <FaLinkedinIn className="group-hover:text-white w-full h-full" />
          </div>
          <div className="p-1 lg:p-3 bg-background rounded-lg hover:bg-primary  w-10 lg:w-[12%] aspect-square group transition-all duration-100 ease-linear cursor-pointer">
            <FaInstagram className="group-hover:text-white w-full h-full" />
          </div>
        </div>
        <div className="menu-items  px-4 mb-4">
          <ul className="">
            <li
              className="py-2 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md flex items-center "
              onClick={() => setTabIndex(0)}
            >
              <AiFillHome className="w-[20%] border-r-2" />
              <span className="pl-4">Home</span>
            </li>

            <li
              className="py-2 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => setTabIndex(1)}
            >
              <HiBeaker className="w-[20%] border-r-2" />
              <span className="pl-4">Research</span>
            </li>

            <li
              className="py-2 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => setTabIndex(2)}
            >
              <MdLibraryBooks className="w-[20%] border-r-2" />
              <span className="pl-4">Patents & Copyrights</span>
            </li>
            <li
              className="py-2 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => setTabIndex(3)}
            >
              <FaBook className="w-[20%] border-r-2" />
              <span className="pl-4">Projects & Workshops</span>
            </li>
            <li
              className="py-2 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => setTabIndex(4)}
            >
              <BiSolidNavigation className="w-[20%] border-r-2" />
              <span className="pl-4">Awards & Membership</span>
            </li>
            <li
              className="py-2 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => setTabIndex(5)}
            >
              <MdOutlineHomeRepairService className="w-[20%] border-r-2" />
              <span className="pl-4">Specialist Services</span>
            </li>
            <li
              className="py-2 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => setTabIndex(6)}
            >
              <RiGalleryFill className="w-[20%] border-r-2" />
              <span className="pl-4">Gallery</span>
            </li>
            <li className="py-2 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center ">
              <RiContactsBook3Fill className="w-[20%] border-r-2" />
              <span className="pl-4">Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
