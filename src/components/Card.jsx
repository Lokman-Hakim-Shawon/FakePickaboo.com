import React from 'react';
import useApi from '../customHook/useApi';
// import img from '../assets/images/product-list1.png'
const Card = ({url,title}) => {
    const data=useApi(url)
    console.log(data)
    if(!data){
        <div>loading....</div>
    }
    return (
        <div className='bg-white border-2 py-12 px-4 gap-x-4 my-4'>
            <h1 className='pb-8 text-3xl font-bold'>{title}</h1>
           <div className='flex gap-x-4'>
           {
                data?.map((data,index)=><div key={index} className='border-2 py-4 rounded-xl'>
                <img src={data.img} alt='photo' />
                <h3 className='px-4'>{data.title}</h3>
                <div className='flex items-center justify-around pt-4'>
                <p className='font-bold text-xl'>৳ {data.price}</p>
                <p className='line-through text-xs'>৳ {data.previousPrice}</p>
                </div>
                </div>
                )
            }
           </div>
        </div>
    );
};

export default Card;