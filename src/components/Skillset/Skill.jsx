"use client"
import Link from 'next/link';
import { useState } from 'react';
import data from './Skill.json';
import Image from 'next/image';

const Skill = () => {

    const card = data.skillset;
    const [itemsToShow, setItemsToShow] = useState(6);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleButtonClick = () => {
        if (isExpanded) {
            // If the items are already expanded, collapse them
            setItemsToShow(6);
            setIsExpanded(false);
        } else {
            // If the items are not expanded, expand them
            setItemsToShow(data.length);
            setIsExpanded(true);
        }
    };


    return (
        <div className='bg-[#f4f4f5]'>
            <div className="lg:p-0  mt-[2px] mr-[60px] ml-[60px] mb-[8rem]">
                <div>
                    <h1 className="text-[1.9rem] font-bold mt-20">Skill-Sets</h1>
                    <hr className="w-[5rem] h-[0.12rem] bg-black" />
                </div>
                <div>
                    <div className='grid grid-cols-3 w-full gap-8'>
                        {card.slice(0, itemsToShow).map((card) => (
                            <div key={card.id} className='flex flex-row '>
                                <div key={card.id} className="border rounded-lg mt-10 w-[30rem] p-7">
                                    {/* Rendering images using r\egular img tag */}
                                    <div className='flex flex-row gap-2'>
                                        {card.image.map((image, index) => (
                                            <div key={index} className="flex flex-row w-100 h-30 ">
                                                <Image
                                                    key={index}
                                                    src={image} // Assuming each item in 'image' array is a path to an image
                                                    alt={`Image ${index + 1} of card ${card.id}`}
                                                    width={30}
                                                    height={30}
                                                    className=""
                                                />
                                            </div>
                                        ))}

                                    </div>
                                    <div >
                                        <p className="text-[1rem] mt-6 ">{card.description}</p>
                                        <button className="bg-black text-white p-2 mt-4 rounded-lg">Learn More</button>

                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>

                    <button onClick={handleButtonClick} className='flex items-center justify-center m-auto bg-black text-white p-2 mt-[7%] rounded-lg '>
                        {isExpanded ? 'See Less' : 'See More'}
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Skill
