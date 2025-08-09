import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';

function App() {
  return (
    <div className='w-full min-h-screen bg-emerald-100 container relative'>
       <Navbar />
       <Hero />
    </div>
  )
}

export default App;