// import React from 'react';
import banner1 from '../assets/images/banner1.jpg'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'
import banner4 from '../assets/images/banner4.jpg'
import banner5 from '../assets/images/banner5.jpg'
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} className='w-[75%] z-20'>
                <div>
                    <img src={banner1} />
                    
                </div>
                <div>
                    <img src={banner2} />
                    
                </div>
                <div>
                    <img src={banner3} />
                    
                </div>
                <div>
                    <img src={banner4} />
                    
                </div>
                <div>
                    <img src={banner5} />
                    
                </div>
            </Carousel>
    );
};

export default Banner;