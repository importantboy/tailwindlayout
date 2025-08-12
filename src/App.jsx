import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';

function App() {
  return (
    <div className='w-full min-h-screen bg-emerald-100 container relative m-auto'>
       <Navbar />
       <Hero />
       <Features />
    </div>
  )
}

export default App;