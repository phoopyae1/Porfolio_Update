import Image from "next/image";

const Aboutme = () => {
  return (
    <div className=" h-[40rem] flex flex-row items-center">
      <div>
        <Image src="/phoo2.png" width={2000} height={2000}></Image>
      </div>
      <div className="flex  flex-col ">
        <h1 className="flex text-[2.5rem] md-text-[1rem]">Crafting digital experiences, one line at a time.</h1>
        <p className="mt-2">Hi, My name is <span className="bg-gradient-to-r from-black to-purple-500 inline-block text-transparent bg-clip-text">Phoo Pyae Pyae Soe.</span>I am from Myanmar. I am a front-end developer, and I would love to solve digital problems. Using my expertise in web technologies, I strive to create intuitive and user-friendly interfaces that enhance the online experience. Let's collaborate to turn ideas into impactful solutions.</p>
        <div className="bg-black w-1/5 rounded-full flex mt-10 ">
          <button className=" text-white p-4 ">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
