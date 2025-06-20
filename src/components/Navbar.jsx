import React from 'react';
import { FiShoppingCart } from 'react-icons/fi'
import { FiMenu } from 'react-icons/fi'
const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-primary py-2 text-white sticky top-0'>
            <div className='flex items-center gap-x-4 w-[25%]  font-bold text-3xl'>
            <FiMenu className="text-3xl cursor-pointer ml-4" />
                <h2>FakePickaboo</h2>
            </div>
            <input type='text' name='search' placeholder='Search for Porducts Bands and more'  className='w-[50%] py-2 rounded-lg pl-4'/>
            <div className='flex justify-center w-[25%] text-xl gap-x-8 items-center'>
                <button className='border-2 border-white py-2 px-6 text-center rounded-lg '>Login</button>
                <div className='flex gap-x-1 text-xl items-center'>
                <FiShoppingCart className="text-3xl cursor-pointer" />
                <h3>Cart</h3>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;