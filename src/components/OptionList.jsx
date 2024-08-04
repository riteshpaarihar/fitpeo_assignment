import { MdArrowForwardIos } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { CiBurger } from "react-icons/ci";

const OptionList = () => {
  return (
    <div className="bg-[#1f2029] p-4 rounded-lg">
      <ul className="space-y-4">
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <span
              className="w-[30px] h-[30px] rounded-full mr-2 flex items-center justify-center 
           bg-[#603138] "
            >
              <GoGoal />
            </span>
            <span className="text-white">Goals</span>
          </div>
          <span className="w-[30px] h-[30px] bg-[#45474b] flex justify-center items-center  rounded-full">
            <MdArrowForwardIos />
          </span>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <span
              className="w-[30px] h-[30px] rounded-full mr-2 flex items-center justify-center 
    bg-[#293268] "
            >
              <CiBurger />
            </span>
            <span className="text-white">Popular   Dishes</span>
          </div>
          <span className="w-[30px] h-[30px] bg-[#45474b] flex justify-center items-center  rounded-full">
            <MdArrowForwardIos />
          </span>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <span
              className="w-[30px] h-[30px] rounded-full mr-2 flex items-center justify-center 
           bg-[#204a62] "
            >
              <GiHotMeal />
            </span>
            <span className="text-white">Menus</span>
          </div>
          <span className="w-[30px] h-[30px] bg-[#45474b] flex justify-center items-center  rounded-full">
            <MdArrowForwardIos />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default OptionList;
