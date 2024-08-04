

const Card = ({item}) => {
  const { icon: Icon ,title,value,percentage,iconColor,arrow:Arrow,arrowColor} = item;

  return (
    <div className="bg-[#1f2029] text-white p-2 rounded-lg shadow-md  w-[24.20%]  ">
      <div className="flex items-center justify-between">
        <div className={`p-2 rounded`} style={{ backgroundColor: iconColor }} >
          {Icon && <Icon className="" />} {/* Render the icon */}
        </div>
      </div>
      <p className="ml-1 text-lg">{title}</p>

      <div className="flex mt-2 items-center justify-between">
      <div className=" text-2xl test-semibold">{value}</div>
      <div className= {`flex items-center ${arrowColor}`}>
          <span className="text-sm mr-1">{percentage}</span>
          {Arrow && <Arrow className="" />}
        </div>
      </div>
    </div>
    
  );
};

export default Card;
