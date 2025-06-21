import React from 'react';
import product_list1 from '../assets/images/product-list1.png'
import product_list2 from '../assets/images/product-list2.png'
import product_list3 from '../assets/images/product-list3.png'
import product_list4 from '../assets/images/product-list4.png'
import product_list5 from '../assets/images/product-list5.png'
import product_list6 from '../assets/images/product-list6.png'
const ProductList = () => {
    const productList=[
        {img:`${product_list1}`,color:'#85e89a',title:'Cool & Comfort Deals on AC'},
        {img:`${product_list2}`,color:'#62deeb',title:'Home Essentials'},
        {img:`${product_list3}`,color:'#41d1c0',title:'Enjoy Express Delivery'},
        {img:`${product_list4}`,color:'#acd1f9',title:'0% EMI Facility'},
        {img:`${product_list5}`,color:'#bc83cd',title:'Mac Mania'},
        {img:`${product_list6}`,color:'#de615b',title:'Best Price Guaranteed'},
        {img:`${product_list2}`,color:'#62deeb',title:'Home Essentials'},
    ]
    return (
        <div className='bg-white py-8 flex justify-between items-center px-4 my-4'>
            {
                productList.map((data,inx)=><div key={inx} className=' text-center h-48' >
                <img src={data.img} alt="photo" key={inx} className={`p-4 w-32 h-32 rounded-xl`} style={{backgroundColor:data.color}}/>
                <h3 className=' w-32'>{data.title}</h3>
            </div>)
            }
        </div>
    );
};

export default ProductList;