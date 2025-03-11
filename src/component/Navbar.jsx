import { CiLocationOn } from "react-icons/ci"
import { FaRegCalendar } from "react-icons/fa"
import { GiGraduateCap } from "react-icons/gi"
import { GrGroup } from "react-icons/gr"
import { IoMdContact } from "react-icons/io"
import { IoList } from "react-icons/io5"
import { MdOutlineFavorite } from "react-icons/md"

const Navbar = () => {
  return (
  
      <nav className="shadow-lg bg-gray-800 text-white">
        <ul className="flex justify-between space-x-2 p-4">
          <li className="text-2xl">BTEB Results Zone</li>
          <li className="flex items-center gap-2"> <span><IoMdContact size={24} /></span> Individual Results</li>
          <li className="flex items-center gap-1"><span><GrGroup /></span> Group Results</li>
          <li className="flex items-center gap-1"> <span><GiGraduateCap /></span> Institute Results</li>
          <li className="flex items-center gap-1"> <span><FaRegCalendar /></span> Latest Results</li>
          <li className="flex items-center gap-1"><span><CiLocationOn /></span> Point Results <span className="rounded-full w-10 border-1 border-gray-300">New</span></li>
          <li className="flex items-center gap-1"><span><MdOutlineFavorite /></span> Favourites</li>
          <li><span><IoList fontSize={36} /></span></li>
        </ul>
      </nav>

  )
}

export default Navbar

