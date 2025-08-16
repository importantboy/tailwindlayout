import React from 'react'

function Hero() {
  return (
    <div className='relative h-screen text-left overflow-x-hidden'>
         <h2 className='flaoting-head text-lg p-4 bg-emerald-800  text-emerald-50 font-bold tracking-wide fixed w-full md:hidden'>CloudFlex</h2>
          <div className='text-and-button flex flex-col p-4 justify-center h-full items-center'>
         <h1 className='text-4xl font-semibold text-center sm:text-5xl md:text-6xl'>Blazing Fast & Secure <br></br>Cloud Hosting for Your Business</h1>
          <p className='text-md md:text-2xl mt-4'>Deploy your websites in seconds with 99.99% uptime and 24/7 support.</p>
         <button className='py-3 mt-4 text-lg w-sm bg-emerald-800 text-emerald-50 rounded-md hover:cursor-pointer hover:bg-emerald-300 hover:text-emerald-900 transition-all duration-100 ease-in font-bold'>Start Your Free Trial</button>
          </div>
</div>
  )
}

export default Hero;