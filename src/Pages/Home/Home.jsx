import Feature from "../FeatureItem/Feature";
import Banner from "./Banner/Banner";
import Cateagori from "./Categori/Cateagori";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Cateagori/>
            <Feature/>     
        </div>
    );
};

export default Home;