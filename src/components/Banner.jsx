import React from 'react';
import banner1 from '../assets/images/banner1.jpg'
const Banner = () => {
    return (
        <div className='w-[75%]'>
            <img src={banner1} className='h-full bg-cover' />
        </div>
    );
};

export default Banner;