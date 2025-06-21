import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const MenuBar = () => {
    const menuList=['Air Conditioner','Television','Electronics & Appliances','smartPhone','Mobile Accessories','Computers','Computer Accessories','LifeStyle']
    return (
        <div className='w-[25%] bg-white'>
            {
                menuList.map((data,index)=><ul key={index} className=" text-lg pl-8 py-2 space-y-2">
                <li className="flex justify-between ">{data} <span className='text-xl font-bold text-gray-400 px-4'><IoIosArrowForward /></span></li>
            </ul>)
            }
        </div>
    );
};

export default MenuBar;