import Aboutme from "@/components/Aboutme/Aboutme.jsx";
import Links from "@/components/Navbar/Links.jsx";
import Skill from "@/components/Skillset/Skill.jsx";
import About from "@/components/About/About.jsx";
const Home = () => {
    return (
        <div className="bg-[#e3e3e3]">
            <div className="flex flex-col ">
                <Links />
                <Aboutme />
                <Skill />
                <About/>
            </div>
        </div>

    );
};
export default Home;