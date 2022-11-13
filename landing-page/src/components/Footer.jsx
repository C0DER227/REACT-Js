import React from 'react'

function Footer() {
  return (
    <>
    <div>
    <hr />
    <h2 className='text-white text-2xl underline'>Address:</h2>
    <div className='flex mx-1 cursor-pointer'>
    <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <p className='text-white'>Lorem ipsum dolor sit.</p>
    <p className='text-white'>Lorem, ipsum dolor.</p>
    </div>
    <div className='flex'>
    <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi maxime, dolorum sequi placeat doloremque praesentium.</p>
    <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi maxime, dolorum sequi placeat doloremque praesentium.</p>
    </div><br /><hr />
    <div>
        <h3 className='text-white text-center'>Copyrights reserved @<a className='underline' href="#">BroadCom</a></h3>
    </div>
    </div>
    </>
  )
}

export default Footer