import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function PricingCard() {
  return (
    <>
     <div className='pricing-section-container p-4 md:p-6 '>
              {/* pricing-card */}
                  <div className='pricing-card border-1 border-emerald-800 shadow-md flex flex-col rounded-md'>
                    <h3 className='text-center text-xl font-semibold my-2 capitalize'>Free / start plan (for beginners)</h3>
                    <div className='mx-6 [&>p]:text-md'>
                    <h4 className='text-lg capitalize my-2 font-medium'>$0/month</h4>
                    <p><FaCheck className='inline-block text-green-800'/> 1GB cloud storage</p>
                    <p><FaCheck className='inline-block text-green-800'/> 1 Project</p>
                    <p><FaCheck className='inline-block text-green-800'/> Basic analytics</p>
                    <p><FaCheck className='inline-block text-green-800'/> Email support</p>
                    <p><MdOutlineClose className='inline-block text-red-600  text-xl'/> No custom domain</p>
                    </div>
                    <a href='#' className='cta-btn py-3 px-2 bg-emerald-700 m-4 rounded-md text-center text-emerald-50 text-lg font-medium tracking-wider capitalize cursor-pointer'>start for free</a>
                  </div>
          </div>
    </>
  )
}

export default PricingCard