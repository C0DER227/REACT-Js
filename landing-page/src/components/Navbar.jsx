import React from 'react'

function Navbar() {
  return (
    <header>
    <nav>
    <h1 className='font-bold text-3xl text-red-600'>BROADCOM</h1>
    <ul className='flex justify-end mx-auto px-4 gap-x-10'>
        <li className='active  text-2xl text-green-400 cursor-pointer'><a href="/">Home</a></li>
        <li className='text-white  text-2xl hover:underline cursor-pointer'><a href="/Features">Features</a></li>
        <li className='text-white  text-2xl hover:underline cursor-pointer'><a href="/About">About</a></li>
        <li className='text-white  text-2xl hover:underline cursor-pointer'><a href="/Contact">Contact</a></li>
    </ul>
    </nav>
    </header>
  )
}

export default Navbar