import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { IoList, IoMenu, IoClose } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-lg bg-gray-800 text-white">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl">BTEB Results Zone</h1>
        
        {/* Hamburger Menu Button for Small Screens */}
        <button
          className="block md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
        
        {/* Navbar for Medium & Large Screens */}
        <ul className="hidden md:flex justify-between space-x-4">
          <li className="flex items-center gap-2">
            <IoMdContact size={24} /> Individual Results
          </li>
          <li className="flex items-center gap-1">
            <GrGroup /> Group Results
          </li>
          <li className="flex items-center gap-1">
            <GiGraduateCap /> Institute Results
          </li>
          <li className="flex items-center gap-1">
            <FaRegCalendar /> Latest Results
          </li>
          <li className="flex items-center gap-1">
            <CiLocationOn />
            Point Results
            <span className="rounded-full w-10 border border-gray-300 text-xs px-2">New</span>
          </li>
          <li className="flex items-center gap-1">
            <MdOutlineFavorite /> Favourites
          </li>
          <li>
            <IoList fontSize={36} />
          </li>
        </ul>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center md:space-y-4 md:gap-x-4 bg-gray-900 p-4">
          <li className="flex items-center gap-2">
            <IoMdContact size={24} /> Individual Results
          </li>
          <li className="flex items-center gap-1">
            <GrGroup /> Group Results
          </li>
          <li className="flex items-center gap-1">
            <GiGraduateCap /> Institute Results
          </li>
          <li className="flex items-center gap-1">
            <FaRegCalendar /> Latest Results
          </li>
          <li className="flex items-center gap-1">
            <CiLocationOn />
            Point Results
            <span className="rounded-full w-10 border border-gray-300 text-xs px-2">New</span>
          </li>
          <li className="flex items-center gap-1">
            <MdOutlineFavorite /> Favourites
          </li>
          <li>
            <IoList fontSize={36} />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
