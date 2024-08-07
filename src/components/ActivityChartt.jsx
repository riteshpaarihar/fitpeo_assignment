


import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ActivityChartt = () => {
  const data = {
    labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
      {
        label: 'Activity',
        data: [5, 10, 5, 15, 10, 5, 8, 12, 5, 10, 5, 15, 10, 5],
       
        backgroundColor: '#4B72D4',
        borderRadius: 10,
        barThickness: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#A0AEC0',
        },
      },
      y: {
        grid: {
          color: '#2D3748',
        },
        ticks: {
          color: '#A0AEC0',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-[#1f2029] p-3 rounded-lg shadow-lg  ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-lg font-bold mb-4">Activity</h2>
        <button className="text-gray-400 bg-gray-700 p-2 rounded-lg">Weekly</button>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChartt;
