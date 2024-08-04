
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// const ActivityChart = () => {
//   const data = {
//     labels: Array.from({ length: 22 }, (_, i) => i + 6),
//     datasets: [
//       {
//         label: 'Activity',
//         data: [5, 6, 8, 12, 9, 11, 14, 13, 12, 9, 10, 11, 13, 15, 17, 16, 15, 14, 13, 14, 12, 10],
//         backgroundColor: '#4B72D4',
//         borderRadius: 10,
//         barThickness: 20,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         ticks: {
//           beginAtZero: true,
//         },
//         grid: {
//           borderDash: [10],
//         },
//       },
//     },
//   };

//   return (
//     <div className="bg-gray-900 p-6 rounded-lg">
//       <h2 className="text-white text-lg mb-4">Activity</h2>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default ActivityChart;






// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// const ActivityChart = () => {
//   const data = {
//     labels: Array.from({ length: 22 }, (_, i) => i + 6),
//     datasets: [
//       {
//         label: 'Activity',
//         data: [5, 6, 8, 12, 9, 11, 14, 13, 12, 9, 10, 11, 13, 15, 17, 16, 15, 14, 13, 14, 12, 10],
//         backgroundColor: '#4B72D4',
//         borderRadius: 10,
//         barThickness: 20,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         ticks: {
//           beginAtZero: true,
//         },
//         grid: {
//           borderDash: [10],
//         },
//       },
//     },
//   };

//   return (
//     <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//       <h2 className="text-white text-lg mb-4">Activity</h2>
//       <div className="flex items-center justify-between mb-4">
//         <span className="text-gray-400">Weekly</span>
//         <button className="text-sm text-gray-300 bg-gray-800 py-1 px-2 rounded">Weekly</button>
//       </div>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default ActivityChart;








const ActivityChart = () => {
  // const data = [
  //   { day: 6, value: 2 },
  //   { day: 7, value: 9 },
  //   { day: 8, value: 3 },
  //   { day: 9, value: 3 },
  //   { day: 10, value: 5 },
  //   { day: 11, value: 5 },
  //   { day: 12, value: 4 },
  //   { day: 13, value: 4 },
  //   { day: 14, value: 2 },
  //   { day: 15, value: 1 },
  //   { day: 16, value: 6 },
  //   { day: 17, value: 6 },
  //   { day: 18, value: 5 },
  //   { day: 19, value: 9 },
  //   { day: 20, value: 11 },
  //   { day: 21, value: 14 },
  //   { day: 22, value: 10 },
  //   { day: 23, value: 7 },
  //   { day: 24, value: 3 },
  //   { day: 25, value: 9 },
  //   { day: 26, value: 6 },
  //   { day: 27, value: 5 },
  // ];

  return (
    <div className="bg-[#1f2029] p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">Activity</h2>
        <button className="bg-gray-700 px-3 py-1 rounded-md text-sm text-white">
          Weekly
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">15k</span>
              <div className="w-full h-1 bg-gray-700 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">10k</span>
              <div className="w-full h-1 bg-gray-700 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">5k</span>
              <div className="w-full h-1 bg-gray-700 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">0</span>
              <div className="w-full h-1 bg-gray-700 rounded-full"></div>
            </div>
          </div>
{/*   
          <div className="w-full flex justify-between">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{ width: '3.3%' }}
              >
                <div
                  className="bg-blue-400 rounded-t-full"
                  style={{
                    height: `${(item.value / 15) * 100}%`,
                    maxWidth: '4px',
                  }}
                ></div>
                <div
                  className="bg-gray-700 rounded-b-full"
                  style={{
                    height: `${
                      (15 - item.value) / 15
                    } * 100%`,
                    maxWidth: '4px',
                  }}
                ></div>
                <span
                  className="text-xs text-gray-400 mt-1"
                  style={{ width: '15px' }}
                >
                  {item.day}
                </span>
              </div>
            ))}
          </div>
*/}
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
