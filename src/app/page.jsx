import Aboutme from "@/components/Aboutme/Aboutme.jsx";
import Links from "@/components/Navbar/Links.jsx";
import Project from "@/components/Projects/Project.jsx";
const Home = () => {
    return (

        <div className="flex flex-col lg:p-0 bg-[#e3e3e3]  ">
            <Links />
            <Aboutme />
            <Project/>
        </div>

    );
};
export default Home;