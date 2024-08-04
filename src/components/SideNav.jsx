
import { GoHome } from "react-icons/go";
import { BsFileBarGraph } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoLogoDropbox } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
const  SideNav=()=> {
  return (
    <div className="w-[5%] h-screen bg-[#1f2029] fixed">
            <div className="text-white text-xl font-bold mb-6 flex flex-col h-[100%] justify-between">
              <ul className="flex flex-col items-center">
                <li className="mb-8 mt-2 text-3xl ">
                  <a href="#" className="text-[#7794fa] hover:[#7794fa]">
                    <IoLogoDropbox />
                  </a>
                </li>
                <hr />
                <li className="mb-5">
                  <a href="#" className="text-gray-400 hover:[#7794fa]">
                    <GoHome />
                  </a>
                </li>
                <li className="mb-5">
                  <a href="#" className="text-gray-400 hover:[#7794fa]">
                    <BsFileBarGraph />
                  </a>
                </li>
                <li className="mb-5">
                  <a href="#" className="text-gray-400 hover:[#7794fa]">
                    <RiShoppingBag2Line />
                  </a>
                </li>
                <li className="mb-5">
                  <a href="#" className="text-gray-400 hover:[#7794fa]">
                    <CiWallet />
                  </a>
                </li>
                <li className="mb-5">
                  <a href="#" className="text-gray-400 hover:[#7794fa]">
                    <IoBagCheckOutline />
                  </a>
                </li>
              </ul>

              <ul className="flex flex-col items-center ">
                <li className="mb-4  ">
                  <a href="#" className="text-gray-400 hover:[#7794fa]">
                    <RiLogoutCircleRLine />
                  </a>
                </li>
              </ul>
            </div>
          </div>
  )
}

export default SideNav
