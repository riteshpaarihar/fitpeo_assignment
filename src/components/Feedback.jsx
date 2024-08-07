

import first from "../../public/dummy-profile-01.png"
import second from "../../public/dummy-profile-02.jpg"
import thrid from "../../public/dummy-profile-03.png"
import forth from "../../public/dummy-profile-04.jpg"
import fifth from "../../public/dummy-profile-05.png"

const PROFILE={
  first,
  second,
  thrid,
  forth,
  fifth
}

const  Feedback=()=> {

    const data = [
        {
            name: "Jenny Wilson",
            rating: "★★★★★",
            comment: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome...",
            profile: PROFILE.first
        },
        {
            name: "John Smith",
            rating: "★★★★☆",
            comment: "Great atmosphere and good food. The steak was cooked to perfection, but the dessert was a bit lacking.",
            profile: PROFILE.second
        },
        {
            name: "Emily Davis",
            rating: "★★★☆☆",
            comment: "Average experience. The pasta was decent, but the service was a bit slow and the ambiance could be improved.",
            profile: PROFILE.thrid
            
        },
        {
            name: "Michael Brown",
            rating: "★★★★★",
            comment: "Absolutely loved it! The seafood platter was fresh and delicious. Will definitely come back!",
            profile: PROFILE.forth
        },
        {
            name: "Sarah Johnson",
            rating: "★★★★☆",
            comment: "Nice place with a cozy vibe. The vegetarian options were great, though the wait for the food was a bit long.",
            profile: PROFILE.fifth
        },
        {
            name: "David Lee",
            rating: "★★☆☆☆",
            comment: "Not impressed. The chicken was overcooked and the service was lacking. Wouldn't recommend.",
            profile: PROFILE.first
        },
        {
            name: "Laura Martinez",
            rating: "★★★★★",
            comment: "Fantastic dining experience. The wine selection was superb and the lamb chops were to die for!",
            profile: PROFILE.second
        },
        {
            name: "Chris Wilson",
            rating: "★★★☆☆",
            comment: "It was okay. The burgers were good, but the fries were soggy. The service was friendly though.",
            profile: PROFILE.thrid
        },
        {
            name: "Jessica Taylor",
            rating: "★★★★☆",
            comment: "Very good meal with a nice ambiance. The appetizers were delightful, but the main course was a bit underwhelming.",
            profile: PROFILE.forth
        },
        {
            name: "Daniel Thompson",
            rating: "★★★★★",
            comment: "Perfect dinner spot! The sushi was incredibly fresh and the staff was very attentive. Highly recommend!",
            profile: PROFILE.fifth
        }
    ];
    
  return (
    <div className="bg-[#1f2029] p-4 rounded h-[100vh] overflow-auto ">
  
    <h2 className="text-white text-lg font-bold mb-4">Customers Feedback</h2>
    <div className="mt-4">
    {data.map((item, index) => {
        return (
            <div key={index} className="flex items-start mb-4">
            {/*    <img src="profile-pic-placeholder.jpg" alt={`Profile picture of ${item.name}`} className="w-8 h-8 rounded-full mr-2"/> */}
            <img src={item.profile} alt={`Profile picture of ${item.name}`} className="w-8 h-8 rounded-full mr-2"/>
                <div>
                    <div className="text-white font-bold">{item.name}</div>
                    <div className="text-yellow-400">{item.rating}</div>
                    <div className="text-gray-400">
                        {item.comment}
                    </div>
                </div>
            </div>
        );
    })}
    
       
     
       
    </div>
</div>

                

  )
}

export default Feedback
