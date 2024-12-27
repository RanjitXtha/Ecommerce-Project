import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full flex items-center gap-y-12  flex-col md:flex-row max-container min-h-[15rem] padding bg-black text-white py-[4rem] gap-8'>
        <div className='text-3xl flex-1 font-extrabold'>
            LUXURY
        </div>

        <div className='flex flex-1 flex-col justify-start gap-2'>
            <p className='text-2xl font-bold mb-4'><FaPhoneAlt className='inline mr-3' />+977 9123456789</p>
            <p>Baneshwor-5, Kathmandu</p>
            <p>shrestha.ranjit.np@gmail.com</p>
            <div className='flex text-3xl gap-3'>
                    <nav><FaFacebook /></nav>
                    <nav><RiInstagramFill /></nav>
                    <nav><FaTwitter /></nav>
            </div>
        </div>

        <div className='flex flex-1 items-center flex-col gap-3'>
            <p>Home</p>
            <p>Shop</p>
            <p>About Us</p>
            <p>Contact</p>
          
        </div>

    </div>
  )
}

export default Footer