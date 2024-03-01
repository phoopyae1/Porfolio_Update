import Image from "next/image";
import Link from "next/link";

const Links = () => {
    const Images = [
        {
            img: "/git.png",
            path: "https://github.com/phoopyae1",
            title: "Github",
            width: "30",
            height: "30"
        },
        {
            img: "/linkedin.png",
            path: "https://www.linkedin.com/in/phoo-pyae-pyae-soe-2b2a541ba/",
            title: "Linkedin",
            width: "55",
            height: "55"
        }
    ]
    return (
        <div className="flex flex-row justify-between mt-5">
            <div className="gap-9 font-bold text-[2rem]">
                <h1>Porfolio</h1>
            </div>
            <div className="w-[18rem] flex justify-between items-center">
                <a href="#aboutme">About me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="flex flex-row gap-4 items-center">
                {Images.map((image) => (
                    <Link href={image.path} key={image.title}>
                        <Image
                            src={`${image.img}`}
                            alt="Picture of the author"
                            width={image.width}
                            height={image.height}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Links;
