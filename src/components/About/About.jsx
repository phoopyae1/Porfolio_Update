"use client"
import Image from "next/image";
import Download from "./Download";
const About = () => {
    return (
        <div className="bg-[#ededed] w-full h-[35rem] aspect-[8/1]  ">
            <div className="  lg:p-0  mr-[60px] ml-[60px] mb-[10rem]">
                <div className="flex flex-row">
                    <div className="flex flex-col w-1/2 mt-[11rem]">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">About me</h1>
                            <hr className="w-[5rem] h-[0.12rem] bg-black" />
                        </div>

                        <div className="mt-7">
                            <p>While I was in Myanmar, I studied for four years as a software engineering student. I transferred from the University of Information Technology in Yangon, Myanmar, to Rangsit University as an ICT student in Thailand. My goal is to address digital problems by developing websites. I am particularly interested in applying for a front-end developer position, especially utilizing React.js and Next.js. I consider myself friendly, adaptable, detail-oriented, punctual, and hardworking.</p>
                        </div>
                            <div>
                                <Download />
                            </div>
                        </div>

                    <div className="w-1/2 mt-[-10rem]">
                        <Image src="/Phoo6.png" alt="Picture of the author" width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
