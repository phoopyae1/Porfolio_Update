import Image from "next/image";

const Aboutme = () => {
  return (
    <div className=" h-[40rem] flex lg:flex-row lg:items-center flex-col p-8 lg:pt-0 lg:pl-10 lg:pr-1">
      <div className="lg:w-[40%]">
        <Image src="/phoo2.png" width={600} height={600} alt="photos" className="lg:absolute  md:absolute md:ml-11  md:w-[26rem] md:mt-[6rem] lg:left-0 lg:top-20 lg:z-10"></Image>
        <Image src="/bg.png" width={600} height={600} alt="photos" className="hidden md:absolute  md:mt-[2rem] md:w-[30rem] lg:block lg:absolute lg:left-0 lg:top-20 lg:z-0"></Image>
      </div>
      <div className="flex flex-col lg:w-[60%]">
        <h1 className="flex text-[2.5rem] md-text-[1rem] ">Crafting digital experiences, one line at a time.</h1>
        <p className="mt-2">Hi, My name is <span className="bg-gradient-to-r from-black to-purple-500 inline-block text-transparent bg-clip-text">Phoo Pyae Pyae Soe.</span>I am from Myanmar. I am a front-end developer, and I would love to solve digital problems. Using my expertise in web technologies, I strive to create intuitive and user-friendly interfaces that enhance the online experience. Let&apos;s collaborate to turn ideas into impactful solutions.</p>
        <div className="bg-black w-[8rem] rounded-full flex mt-10 ">
          <button className=" text-white p-4 ">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
