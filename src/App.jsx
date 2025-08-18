import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Footer from './Footer';
function App() {
  return (
    <div className='w-full min-h-screen bg-emerald-100 relative m-auto max-w-max overflow-x-hidden'>
       <Navbar />
       <Hero />
       <Features />
       <Pricing />
       <Testimonials />
       <Footer />
    </div>
  )
}

export default App;