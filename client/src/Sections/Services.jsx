import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";

const Services = () => {
  return (
    <div className='margin'>
        <div className="flex justify-evenly sm:flex-nowrap  gap-y-6 flex-wrap font-semibold text-base lg:text-xl">
                <div className='flex gap-4'>
                    <RiCustomerService2Fill className='text-5xl'/>
                    <p className='max-w-[12rem]'>Support 24/7 Contact us 12345</p>
                </div>

                <div className='flex gap-4'>
                    <RiSecurePaymentFill className='text-5xl'/>
                    <p className='max-w-[12rem]'>Secure payment services</p>
                </div>

                <div className='flex gap-4'>
                    <TbTruckDelivery className='text-5xl'/>
                    <p className='max-w-[12rem]'>Free and Fast Shipping</p>
                </div>
            </div>
    </div>
  )
}

export default Services