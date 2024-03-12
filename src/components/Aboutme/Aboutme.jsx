import Image from "next/image";

const Aboutme = () => {
  return (
    <div className="lg:p-0  mt-[2px] mr-[60px] ml-[60px]">
      <div className=" sm:flex sm:flex-col  md:flex md:flex-row md:mt-9 lg:flex-row lg:h-[40rem] lg:flex lg:items-center mb-[5rem]">
        <div className=" sm:w-screen  md:flex md:justify-content md:w-[60%]  lg:w-[55%]  ">
          <Image src="/Phoo.png" width={1000} height={800} alt="photos" className="sm:w-screen  md:w-[100%] md:h-[20rem] lg:flex lg:w-full lg:h-[45rem] lg:z-10 lg:mt-[-20rem]"></Image>
        </div>
        <div className=" sm:flex sm:flex-col sm:w-screen  md:flex md:w-[70%] md:flex-col lg:flex lg:flex-col  lg:w-[45%] lg:ml-2 ">
          <h1 className="flex text-[2.5rem] md-text-[1rem] ">Crafting digital experiences, one line at a time.</h1>
          <p className="mt-2">Hi, My name is <span className="bg-gradient-to-r from-black to-purple-500 inline-block text-transparent bg-clip-text">Phoo Pyae Pyae Soe.</span>I am from Myanmar. I am a front-end developer, and I would love to solve digital problems. Using my expertise in web technologies, I strive to create intuitive and user-friendly interfaces that enhance the online experience. Let&apos;s collaborate to turn ideas into impactful solutions.</p>
          <div className="bg-black w-[8rem] rounded-full flex mt-10 ">
            <button className=" text-white p-4 ">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
