import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import Subheading from "./Subheading";
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
const SidebarMobile = ({
  tabIndex,
  setTabIndex,
}: {
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={`w-full bg-white shadow-lg rounded-xl relative lg:hidden ${
        openMenu === false ? "h-16 md:h-20" : "h-[55vh] md:h-[50vh] min-h-fit"
      } flex flex-col  items-center transition-all duration-500 ease-in-out overflow-hidden`}
    >
      <div className="w-full flex items-center h-16 md:h-20 p-4">
        <Subheading title="Dr. Ganesh Khekare" />
        <HiOutlineMenu
          className="w-8 md:w-12 h-8 md:h-12"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>
      <div className={`content w-full flex-col`}>
        <div className="menu-items  px-4 mb-4 w-full">
          <ul className="">
            <li
              className="py-2 md:py-4  border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md flex items-center "
              onClick={() => {
                setTabIndex(0);
                setOpenMenu(!openMenu);
              }}
            >
              <AiFillHome className="w-[20%] border-r-2" />
              <span className="pl-4">Home</span>
            </li>

            <li
              className="py-2 md:py-4 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => {
                setTabIndex(1);
                setOpenMenu(!openMenu);
              }}
            >
              <HiBeaker className="w-[20%] border-r-2" />
              <span className="pl-4">Research</span>
            </li>

            <li
              className="py-2 md:py-4 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => {
                setTabIndex(2);
                setOpenMenu(!openMenu);
              }}
            >
              <MdLibraryBooks className="w-[20%] border-r-2" />
              <span className="pl-4">Patents & Copyrights</span>
            </li>
            <li
              className="py-2 md:py-4 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => {
                setTabIndex(3);
                setOpenMenu(!openMenu);
              }}
            >
              <FaBook className="w-[20%] border-r-2" />
              <span className="pl-4">Projects & Workshops</span>
            </li>
            <li
              className="py-2 md:py-4 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => {
                setTabIndex(4);
                setOpenMenu(!openMenu);
              }}
            >
              <BiSolidNavigation className="w-[20%] border-r-2" />
              <span className="pl-4">Awards & Membership</span>
            </li>
            <li
              className="py-2 md:py-4 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => {
                setTabIndex(5);
                setOpenMenu(!openMenu);
              }}
            >
              <MdOutlineHomeRepairService className="w-[20%] border-r-2" />
              <span className="pl-4">Specialist Services</span>
            </li>
            <li
              className="py-2 md:py-4 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => {
                setTabIndex(6);
                setOpenMenu(!openMenu);
              }}
            >
              <RiGalleryFill className="w-[20%] border-r-2" />
              <span className="pl-4">Gallery</span>
            </li>
            <li
              className="py-2 md:py-4 border-b-2 border-gray-200 hover:bg-primary hover:text-white font-medium cursor-pointer rounded-md  flex items-center "
              onClick={() => {
                setTabIndex(7);
                setOpenMenu(!openMenu);
              }}
            >
              <RiContactsBook3Fill className="w-[20%] border-r-2" />
              <span className="pl-4">Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
