import Feature from "../FeatureItem/Feature";
import Menu from "../Menu/Menu";
import Banner from "./Banner/Banner";
import Cateagori from "./Categori/Cateagori";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Cateagori/>
            <Feature/>
            <Menu/>     
        </div>
    );
};

export default Home;