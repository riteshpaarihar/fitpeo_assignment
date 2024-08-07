import { IoMdArrowDropup } from "react-icons/io";



import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const NetProfitDisplay = () => {
  const data = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#4B72D4', '#2D3748'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '75%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="bg-[#1f2029] p-3 rounded-lg shadow-lg flex items-center justify-between ">
      <div>
        <h2 className="text-white text-lg mb-2">Net Profit</h2>
        <div className="flex flex-col items-start">
          <span className="text-3xl text-white font-bold">$6759.25</span>
          <div className="flex items-center justify-center text-green-500 "> <span> <IoMdArrowDropup/></span> <span>3%</span> </div>
         
        </div>
      </div>
      <div className="w-24 h-24 relative">
        <Doughnut data={data} options={options} />
        <div className="absolute top-0 left-0 w-24 h-24 flex items-center justify-center flex-col">
          <span className="text-white font-bold">70%</span>
          

        </div>
      </div>
    </div>
  );
};

export default NetProfitDisplay;
