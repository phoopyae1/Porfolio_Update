import Image from "next/image";

const Aboutme = () => {
  return (
    <div className=" sm:flex sm:flex-col  md:flex md:flex-row md:mt-9 lg:flex-row lg:h-[40rem] lg:flex lg:items-center">
      <div className=" sm:w-screen  md:flex md:justify-content md:w-[60%]  lg:w-[55%]  ">
        <Image src="/phooPNG.png" width={1000} height={800} alt="photos" className="sm:w-screen  md:w-[100%] md:h-[20rem] lg:flex lg:w-[100rem]  lg:mt-[-5rem] lg:h-[30rem] lg:z-10"></Image>
        {/* <div className="hidden lg:block md:block md:w-[30rem] md:absolute md:left-0 md:top-[10rem]">
          <Image src="/bg.png" width={600} height={600} alt="photos" className=""></Image>
        </div> */}
      </div>
      <div className=" sm:flex sm:flex-col sm:w-screen  md:flex md:w-[70%] md:flex-col lg:flex lg:flex-col  lg:w-[45%] ">
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
