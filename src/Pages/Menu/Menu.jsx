import { useEffect, useState } from "react";
import Sharetitle from "../../Component/Sharedtitle/Sharetitle";

const Menu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('Menu.json')
            .then(res => res.json())
            .then(data => setMenu(data));
    }, []);

    return (
        <div>
            <Sharetitle heading={"Let's check our menu"} subHeading={"Check it out"} />

            <div className="py-12 flex flex-col justify-center items-center">
         
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
                    {
                        menu.map((item) => (
                            <div key={item.id} className="relative ">
                             
                                <div className="absolute top-4 left-4 w-[350px] h-[360px] bg-[#F4B552]  rounded-xl shadow-lg transform rotate-3 skew-y-2"></div>

                               
                                <div className="bg-white w-[350px]  h-[360px] rounded-xl shadow-xl relative z-10 ">
                                  <div className="flex justify-between px-7">

                                        <img src={item.image} alt={item.name} className="w-[120px] h-[120px]  rounded-full" />
                                        <p className="text-3xl py-5 font-bold mt-2 text-[#F4B552]  ">${item.price}</p>

                                  </div>
                                    <p className="text-gray-700 text-sm px-4 ">{item.details}</p>
                                    <h1 className="text-xl font-bold mt-3">{item.name}</h1>

                                    <p className="text-yellow-500 font-bold">⭐ {item.rating}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;
