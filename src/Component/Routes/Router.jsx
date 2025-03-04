import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import FoodList from "../../Pages/Menuroute/FoodList";


const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/menu',
                element : <FoodList/>
            },
        ]
       
    },
]);

export default router;