import Aboutme from "@/components/Aboutme/Aboutme.jsx";
import Links from "@/components/Navbar/Links.jsx";
const Home = () => {
    return (

        <div className="flex flex-col lg:p-0">
            <Links />
            <Aboutme />

        </div>

    );
};
export default Home;