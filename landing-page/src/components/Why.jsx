import React from 'react'

function Why() {
  return (
    <>
    <div className='bg-white '>
    <h1 className='text-white bg-red-500 underline cursor-pointer'>Why US?</h1>
    <div className='grid grid-cols-2 gap-1 py-6'>
    <img className='h-60 px-32' src="side.jpg" alt="" />
    <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore eipsum dolor sit amet consectetur adipisicing elit. Enim inventore expedita, in tempore dolore aspernatur iste quibusdam accusamus, magnam alias reiciendis, tempora perspiciatis reprehenderit consectetur laudantium qui vitae recusandae? Illo, aliquam, ipsum eveniet quo, dicta voluptatibus necessitatibus minus ullam molestiae recusandae sit sapiente quaerat.<br/>
    <button className='px-32 text-center border border-black hover:bg-red-400 rounded'>Toggle</button></p>
    </div>
    </div>
    </>
  )
}

export default Why