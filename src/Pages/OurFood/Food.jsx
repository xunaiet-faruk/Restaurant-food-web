import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import  './Food.css'
import Sharebanner from "../../Component/Sharebanner/Sharebanner";
import image from '../../../public/foodb.png'
const Food = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
              <Sharebanner img={image} title={"Our Food"} description={"Most Delicious Food in the Restourant"}/>

            <div className="max-w-4xl mx-auto mt-10 p-5">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    {/* Tab List */}
                    <TabList className="flex gap-4 border-none">
                        <Tab className={`px-4 py-2 cursor-pointer focus:outline-none ${tabIndex === 0 ? "text-yellow-500 font-bold" : ""}`}>Title 1</Tab>
                        <Tab className={`px-4 py-2 cursor-pointer focus:outline-none ${tabIndex === 1 ? "text-yellow-500 font-bold" : ""}`}>Title 2</Tab>
                        <Tab className={`px-4 py-2 cursor-pointer focus:outline-none ${tabIndex === 2 ? "text-yellow-500 font-bold" : ""}`}>Title 3</Tab>
                        <Tab className={`px-4 py-2 cursor-pointer focus:outline-none ${tabIndex === 3 ? "text-yellow-500 font-bold" : ""}`}>Title 4</Tab>
                    </TabList>

                    {/* Tab Panels */}
                    <TabPanel>
                        <div className="p-4 bg-gray-100 rounded-lg">Content for Tab 1</div>
                    </TabPanel>
                    <TabPanel>
                        <div className="p-4 bg-gray-100 rounded-lg">Content for Tab 2</div>
                    </TabPanel>
                    <TabPanel>
                        <div className="p-4 bg-gray-100 rounded-lg">Content for Tab 3</div>
                    </TabPanel>
                    <TabPanel>
                        <div className="p-4 bg-gray-100 rounded-lg">Content for Tab 4</div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
        
    );
};

export default Food;
