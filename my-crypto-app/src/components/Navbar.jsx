import React from 'react'

function Navbar() {
  return (
    <>
    <nav>
        <img className='logo-img' src="logo.jpg" alt="" />
        <ul className='top'>
            <li className='ul-items'>Home</li>
            <li className='ul-items'>Cryptopedia</li>
            <li className='ul-items'>News</li>
            <li className='ul-items'>Donate</li>
            <button className='btn'>SignIn/SignUp</button>
        </ul>
    </nav>
    </>
  )
}

export default Navbar