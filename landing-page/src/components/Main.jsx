import React from 'react'
import Typed from 'react-typed'

function Main() {
  return (
    <>
    <h1 className='text-white mx-auto py-40 text-center text-2xl'>A world connected by <br /><Typed className='text-purple-400 text-xl' strings={['Fast','Scalable','Secure']} typespeed={10} backspeed={30} loop />Network</h1>
    <img className='h-60 rounded mx-auto px-4 shadow-lg pb-12 hover:border border-1 border-gray-400 cursor-pointer' src="mid.jpg" alt="" />
    <h3 className='text-gray-400 text-center py-4 mx-4'>Disruptive CPO Innovation <Typed className='text-purple-400 underline ' strings={['mobility','Optamistic','layered']} typespeed={10} backspeed={30} loop /></h3>
    <br />
    <hr />
    </>
  )
}

export default Main