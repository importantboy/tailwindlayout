import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';

function App() {
  return (
    <div className='w-full min-h-screen bg-emerald-100 relative m-auto max-w-max overflow-x-hidden'>
       <Navbar />
       <Hero />
       <Features />
    </div>
  )
}

export default App;