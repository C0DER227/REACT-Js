import React from 'react'


function Memberships() {
  return (
    <>
    <div className='bg-[#B3FFAE] '>
        <h1 className='text-black text-2xl underline'>Memberships:</h1><br />
        <div className='flex justify-evenly'>
        <div>
            <h2 className='font-semibold underline'>Basic</h2><br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae voluptatum, facilis fuga placeat odio a magnam vitae nesciunt sint itaque dolor enim, obcaecati esse debitis molestias modi quis in eius labore. Nisi, aliquid delectus!</p>
            <p className='px-4 mx-2 text-xl'>$20</p><br />
            <button className='bg-black text-white h-10 px-4 mx-2 rounded hover:text-green-300'>Buy Now</button>
        </div>
        <div>
            <h2 className='font-semibold underline'>Intermediate</h2><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem consequatur itaque, magni quia fugiat reprehenderit harum quis deserunt accusamus aspernatur unde expedita incidunt assumenda earum corrupti id, enim culpa nam ea, ducimus animi!</p>
            <p className='px-4 mx-2 text-xl'>$40</p><br />
            <button className='bg-black text-white h-10 px-4 mx-2 rounded hover:text-green-300'>Buy Now</button>         
            </div>
        <div>
            <h2 className='font-semibold underline'>Premium</h2><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque amet laborum facere vel molestiae. Magni, cumque quas sint vel aliquam cupiditate quam numquam eius quos quod autem facilis assumenda vero fugit eos animi!</p>
            <p className='px-4 mx-2 text-xl'>$60</p><br />
            <button className='bg-black text-white h-10 px-4 mx-2 rounded hover:text-green-300'>Buy Now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Memberships