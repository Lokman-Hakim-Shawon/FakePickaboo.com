import React from 'react';
import img1 from "../assets/images/adsBanner.gif"
const AdsBanner = () => {
    return (
        <div className='flex justify-center'>
            <img src={img1} alt="ads image" />
        </div>
    );
};

export default AdsBanner;