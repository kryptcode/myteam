import React from 'react'

const Hero = () => {
  return (
    <section className='relative bg-[#014e56] overflow-x-hidden'>
        <div className='w-[85%] mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-40 text-white py-2 pb-32'>
            <h1 className='text-6xl font-bold'>
                About
            </h1>
            <div>
                <div className='h-[4px] bg-[#f67e7e] w-16 mb-4 md:mb-12' />
                <p className='text-lg font-medium w-[90%] '>
                    We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive 
                    innovation and deliver incredible outcomes. Talented, diverse teams shape the
                    best products and experiences. We’ll bring those teams to you. 
                </p>
            </div>
        </div>
        <div className='absolute bottom-0 -right-28'>
            <img src="./assets/bg-pattern-about-1-mobile-nav-1.svg" alt="" />
        </div>
    </section>
  )
}

export default Hero