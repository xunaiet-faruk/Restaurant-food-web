import Sharebanner from "../../Component/Sharebanner/Sharebanner";
import PopularItem from "../Popular/PopularItem";
import img1 from '../../../public/banner2.jpg'
import img2 from '../../../public/res1.webp'

const FoodList = () => {
    return (
        <div>
            <Sharebanner img={img1} title={"OUR MENU"} description={"Would you like to try a dish"}/>
            <PopularItem/>
            <Sharebanner img={img2} title={"DESSERTS"} description={"Delicious treats that melt in your mouth,bringing joy in every bite,Indulge in our heavenly selection of sweet delights,crafted to satisfy your every craving"}/>
            <PopularItem/>
        </div>
    );
};

export default FoodList;