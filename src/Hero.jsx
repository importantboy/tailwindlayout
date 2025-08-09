import React from 'react'

function Hero() {
  return (
    <div className='relative h-screen text-left'>
         <h2 className='flaoting-head text-lg p-4 bg-emerald-800  text-emerald-50 font-bold tracking-wide fixed w-screen'>CloudFlex</h2>
          <div className='text-and-button flex flex-col p-4 justify-center h-full'>
         <h1 className='text-4xl font-semibold text-left'>Blazing Fast & Secure Cloud Hosting for Your Business</h1>
          <p className='text-md font-medium mt-4'>Deploy your websites in seconds with 99.99% uptime and 24/7 support.</p>
         <button className='py-3 mt-4 text-lg inline-block bg-emerald-800 text-emerald-50 rounded-md'>Start Your Free Trial</button>
          </div>
</div>
  )
}

export default Hero;