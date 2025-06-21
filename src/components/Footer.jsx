import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-[#002f67] text-white mt-10">
      {/* Top: Logo & Socials */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-b">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold">Pickaboo</div>
          <div className="flex space-x-4 text-2xl">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Middle: Links */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h3 className="font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Return Policy</li>
            <li>Track Order</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">About Pickaboo</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">My Account</h3>
          <ul className="space-y-2">
            <li>Login</li>
            <li>My Orders</li>
            <li>Wishlist</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Download App</h3>
          <div className="space-y-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>
      </div>
       <hr/>
      {/* Bottom */}
      <div className="bg-[#002f67] text-center text-sm py-4">
        © {new Date().getFullYear()} Pickaboo. All rights reserved.
      </div>
    </footer>
    );
};

export default Footer;