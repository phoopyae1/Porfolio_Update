import Aboutme from "@/components/Aboutme/Aboutme.jsx";
import Links from "@/components/Navbar/Links.jsx";
import Skill from "@/components/Skillset/Skill.jsx";
const Home = () => {
    return (
<div className="bg-[#e3e3e3]">
        <div className="flex flex-col lg:p-0  mt-[2px] mr-[60px] ml-[60px]">
            <Links />
            <Aboutme />
            {/* <Skill/> */}
        </div>
        </div>

    );
};
export default Home;