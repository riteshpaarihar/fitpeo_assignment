import ActivityChart from "./ActivityChart";
import Card from "./Card";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaHandHoldingDollar } from "react-icons/fa6";

import { BsBagX } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import Orders from "./Orders";
import OptionList from "./OptionList";
import Feedback from "./Feedback";




// Define icons as constants
const ICONS = {
  bucket: MdOutlineShoppingBag,
  bsbucket:IoBagCheckSharp,
  bsbag:BsBagX,
 revenue: FaHandHoldingDollar
};

const ARROWICONS = {
  up: IoMdArrowDropup,
  down:IoMdArrowDropdown,
 
};
const Main = () => {
  const data = [
    {
      id: 1,
      title: "Total Ordars",
      value: "75",
      icon: ICONS.bucket,
     percentage:"3%",
     iconColor:"#4460db",
      arrow:ARROWICONS.up,
      arrowColor:"text-green-400",


    },
    {
      id: 2,
      title: "Total Delivered",
      value: "70",
      icon: ICONS.bsbucket,
       percentage:"3%",
         iconColor:"#145347"
         ,arrow:ARROWICONS.down
         ,arrowColor:"text-red-400",
    },
    {
      id: 3,
      title: "Total Cancelled",
      value: "05",
      icon: ICONS.bsbag,
       percentage:"3%",
         iconColor:"#633239",
         arrow:ARROWICONS.up,
         arrowColor:"text-green-400",
    },
    {
      id: 4,
      title: "Total Revenue",
      value: "$12K",
      icon: ICONS.revenue,
       percentage:"3%",
         iconColor:"#5e2d4c",
         arrow:ARROWICONS.down
         ,arrowColor:"text-red-400",
    },
  ];

  return (
    <div className="flex flex-wrap my-2 ">
      <div className="w-full md:w-2/3 lg:w-2/3">
        <div className="flex flex-wrap gap-2 my-2">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        <div className="my-2"> <ActivityChart /></div>
       
        <div className="my-2"> <Orders/></div>
       

       
      </div>
      <div className="w-full md:w-1/3 lg:w-1/3">
      <div className="my-2 px-2"><OptionList/></div>
      <div className="my-2 px-2"><Feedback/></div>
          </div>
    </div>
  );
};

export default Main;
