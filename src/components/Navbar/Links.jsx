"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Links = () => {
    const [open, setOpen] = useState(false);
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
    const links = [
        {
            name: "About me",
            path: "#aboutme"
        },
        {
            name: "Projects",
            path: "#projects"
        },
        {
            name: "Contact",
            path: "#contact"
        }
    ]
    return (
        <div className="sm:flex  flex flex-row justify-between mt-5 items-center m-0 ">
            <div className="font-bold text-[2rem]">
                <h1>Porfolio</h1>
            </div>
            <div className="hidden lg:w-[18rem] lg:flex lg:justify-between lg:items-center sm:justify-end ">
                {links.map((link) => (
                    <a href={link.path} key={link.name}>{link.name}</a>))}

            </div>
            <div className="flex flex-row gap-4 items-center ">
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

                <Image src="/menu.png" alt="menu" className="lg:hidden" width={25} height={25} onClick={() => setOpen(prev => !prev)} />

                {
                    open && (
                        <div className=" w-screen h-100vh flex top-0">
                            {links.map((link) => (
                                <a href={link.path} key={link.name} className="lg:hidden flex flex-col absolute right-0">{link.name}</a>))}
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Links;
