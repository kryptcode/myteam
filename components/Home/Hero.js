import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#014e56] pt-4 md:pt-16 pb-40 relative overflow-x-hidden'>
        <div className='absolute top-0 -left-32 hidden md:flex'>
            <img src="./assets/bg-pattern-home-1.svg" alt="" />
        </div>
        <div className='w-[85%] mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row space-x-0 md:space-x-10'>
            <div className='flex-[1.3] text-white'>
                <h1 className='text-[4rem] w-full md:text-[6.6rem] leading-none font-bold'>
                    Find the best <span className='text-[#f67e7e]'>talent</span>
                </h1>
            </div>
            <div className='flex-1 text-white flex flex-col justify-between space-y-4'>
                <div className='h-[4px] bg-[#79c8c7] w-16 ' />
                <p className='text-xl font-semibold'>
                Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that. 
                </p>
            </div>
            <div className='absolute bottom-0 right-5'>
                <img src="./assets/bg-pattern-home-2.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero