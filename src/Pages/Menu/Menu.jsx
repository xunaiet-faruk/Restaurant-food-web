import { useEffect, useState } from "react";
import Sharetitle from "../../Component/Sharedtitle/Sharetitle";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [userRating, setUserRating] = useState(1);

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
                            <div key={item.id} className="relative group cursor-pointer">
                        
                                <div className="absolute top-4 left-4 w-[350px] h-[360px] bg-[#F4B552] rounded-xl shadow-lg transform rotate-3 skew-y-2 transition-opacity duration-500 opacity-100 group-hover:opacity-0"></div>

                              
                                <div className="bg-white w-[350px] h-[360px] rounded-xl shadow-xl relative z-10">
                                    <div className="flex justify-between px-4">
                                        <img src={item.image} alt={item.name} className="w-[130px] h-[130px] rounded-full" />
                                        <p className="text-3xl py-5 font-bold mt-2 text-[#F4B552]">${item.price}</p>
                                    </div>
                                    <h1 className="text-2xl pl-6 font-bold mt-3 py-1">{item.name}</h1>
                                    <p className="text-gray-400 text-[20px] pl-6 py-1 font-semibold px-4 pb-6">{item.details}</p>
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
