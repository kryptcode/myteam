import React from 'react'

const OC = () => {
  return (
    <div className='relative bg-[#012f34] overflow-x-hidden '>
        <div className='w-[85%] mx-auto py-36'>
            <h2 className='text-center text-5xl text-white font-bold mb-8'>
                Some of our clients
            </h2>
            <div className='flex flex-col md:flex-row items-center space-y-8 md:space-y-0 justify-between'>
                <img src="./assets/logo-the-verge.png" className='w-40 md:w-32 object-contain' alt="" />
                <img src="./assets/logo-jakarta-post.png" className='w-40 md:w-32 object-contain' alt="" />
                <img src="./assets/logo-the-guardian.png" className='w-40 md:w-32 object-contain' alt="" />
                <img src="./assets/logo-tech-radar.png" className='w-40 md:w-32 object-contain' alt="" />
                <img src="./assets/logo-gadgets-now.png" className='w-40 md:w-32 object-contain' alt="" />
            </div>
        </div>
        <div className='absolute top-0 -left-32 md:-left-12'>
          <img src="./assets/bg-pattern-about-4.svg" alt="" />
        </div>
    </div>
  )
}

export default OC