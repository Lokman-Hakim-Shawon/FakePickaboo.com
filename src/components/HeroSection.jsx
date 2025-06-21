import React from 'react';
import service_img1 from '../assets/images/service-img1.png'
import service_img2 from '../assets/images/service-img2.png'
import service_img3 from '../assets/images/service-img3.png'
import service_img4 from '../assets/images/service-img4.png'
import service_img5 from '../assets/images/service-img5.png'
import service_img6 from '../assets/images/service-img6.png'
const HeroSection = () => {
    const array=[
        {img:`${service_img1}`,title:'3 Hours Delivery'},
        {img:`${service_img2}`,title:'Up to 36 month EMI'},
        {img:`${service_img3}`,title:'Easy returns'},
        {img:`${service_img4}`,title:'Evening Express'},
        {img:`${service_img5}`,title:'Best Price Guaranteed'},
        {img:`${service_img6}`,title:'100% Genuine Products'}
    ]
    return (
        <div className='flex justify-between py-8 my-4 px-4 bg-white shadow-xl'>
            {
                array.map((data,index)=><div key={index} className='flex  items-center space-x-2'>
                <img src={data.img} className='w-12'/>
            <h3>{data.title}</h3>
            </div>)
            }
            {/* <div className='flex  items-center space-x-2'>
                <img src={service_img1} className='w-12'/>
            <h3>Up to 36 month EMI</h3>
            </div> */}
            {/* <h3>Easy returns</h3>
            <h3>Evening Express</h3>
            <h3>Best Price Guaranteed</h3>
            <h3>100% Genuine Products</h3> */}
        </div>
    );
};

export default HeroSection;