import { CiMail } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "../css/style.css";
const Navbar=()=> {
  return (
    <nav className=" flex justify-between h-[10vh] bg-[#1f2029] items-center px-3 fixed w-full flex-res ">
              <input type="text" className="bg-[#292b2f] text-gray-400 p-1 rounded"  placeholder="Search"/>
              <ul className="flex gap-4">
                <li className="flex w-[30px] h-[30px] bg-[#292b2f] rounded-full items-center justify-center">
                  <a href="" >
                  <CiMail />

                  </a>
                </li>
                <li className="flex w-[30px] h-[30px] bg-[#292b2f] rounded-full items-center justify-center">
                  <a href="">
                  <IoSettingsOutline />


                  </a>
                </li>
                <li className="flex w-[30px] h-[30px] bg-[#292b2f] rounded-full items-center justify-center">
                  <a href="">
                  <IoMdNotificationsOutline />


                  </a>
                </li>
                <li className="flex w-[30px] h-[30px] bg-[#292b2f] rounded-full items-center justify-center">
                  <a href="">
                  <CgProfile />


                  </a>
                </li>
              </ul>
            </nav>
  )
}

export default Navbar
