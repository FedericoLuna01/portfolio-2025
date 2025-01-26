import React from 'react'

const Footer = () => {
  return (
    <div className='relative h-[500px] bg-black'
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
      }}
    >
      <div className='relative h-[calc(100vh+500px)] -top-[100vh]'>
        <div className='sticky top-[calc(100vh-500px)] h-[500px]'>
          <div className='flex inset-0 items-end'>
            <p className='text-9xl mt-auto'>Footer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer