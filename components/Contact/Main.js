import React from 'react'

const Main = () => {
  return (
    <div className='bg-[#014e56] relative overflow-x-hidden'>
        <div className='w-[85%] mx-auto py-24 flex flex-col md:flex-row space-y-8 md:space-y-0'>
            <div className='flex-1'>
                <h3 className='text-3xl md:text-6xl font-bold text-center md:text-left text-white'>
                    Contact
                </h3>
                <h5 className='text-2xl md:text-5xl font-bold my-5 text-[#f67e7e] text-center md:text-left'>
                    Ask us about
                </h5>
                <div className='flex space-x-4 items-center text-white font-semibold  text-lg mb-4'>
                    <img src="./assets/icon-person.svg" alt="" />
                    <p>
                    The quality of our talent network 
                    </p>
                </div>
                <div className='flex space-x-4 items-center text-white font-semibold text-lg mb-4'>
                    <img src="./assets/icon-cog.svg" alt="" />
                    <p>
                    The quality of our talent network 
                    </p>
                </div>
                <div className='flex space-x-4 items-center text-white font-semibold text-lg'>
                    <img src="./assets/icon-chart.svg" alt="" />
                    <p>
                    The quality of our talent network 
                    </p>
                </div>
            </div>
            <div className='flex-1 flex flex-col items-start space-y-3'>
                <input type="text" placeholder='name*' className='bg-transparent w-full py-2 pl-1 border-b border-white outline-none placeholder:text-white text-white' />
                <input type="text" placeholder='email*' className='bg-transparent w-full py-2 pl-1 border-b border-white outline-none placeholder:text-white text-white' />
                <input type="text" placeholder='company' className='bg-transparent w-full py-2 pl-1 border-b border-white outline-none placeholder:text-white text-white' />
                <input type="text" placeholder='title' className='bg-transparent w-full py-2 pl-1 border-b border-white outline-none placeholder:text-white text-white' />
                <textarea placeholder='message' className='bg-transparent w-full py-2 pl-1 border-b border-white flex-grow outline-none placeholder:text-white text-white'></textarea>
                <button className='py-2 px-6 hover:opacity-60 rounded-xl bg-white text-[#014e56] font-semibold '>
                    submit
                </button>
            </div>
        </div>
        <div>
            <img src="./assets/bg-pattern-contact-2.svg" className='absolute bottom-0 -right-36' alt="" />
        </div>
        <div>
            <img src="./assets/bg-pattern-about-2-contact-1.svg" className='absolute top-0 -left-36' alt="" />
        </div>
    </div>
  )
}

export default Main