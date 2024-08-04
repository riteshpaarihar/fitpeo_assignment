
import CircularProgressbar from 'react-circular-progressbar'; // Or your preferred library

const NetProfitDisplay=()=> {
  const netProfit = 6759.25;
  const percentageIncrease = 3;
  const progress = 70;

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <h2 className="text-lg font-bold">Net Profit</h2>
      <div className="flex items-center">
        <span className="text-4xl font-bold">$ {netProfit.toFixed(2)}</span>
        <span className="text-green-500 ml-2">▲ {percentageIncrease}%</span>
      </div>
      <div className="flex justify-center mt-4">
        <CircularProgressbar value={progress} text={`${progress}%`} />
      </div>
    </div>
  );
}

export default NetProfitDisplay;