import Banner from "./Banner/Banner";
import Chef from "./Chef/Chef";
import Menu from "./Menu/Menu";
import TopFood from "./TopFood/TopFood";


const Home = () => {
    return (
        <div className="bg-[#93B1A6]">
            <Banner></Banner>
            <TopFood></TopFood>
            <Menu></Menu>
            <Chef></Chef>
        </div>
    );
};

export default Home;