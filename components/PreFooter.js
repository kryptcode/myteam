import React from 'react'
import { useRouter } from 'next/router'


const PreFooter = () => {
  const router = useRouter()
  return (
    <div className='bg-[#f67e7e] text-[#004047] relative overflow-clip '>
        <div className='w-[85%] mx-auto py-24 flex flex-col md:flex-row text-center md:text-left space-y-3 md:space-y-0 items-center justify-between'>
            <h2 className='text-5xl font-bold'>
                    Ready to get started?
            </h2>
            <p className='font-semibold text-xl py-1.5 px-4 border-2 border-[#004047] rounded-3xl cursor-pointer hover:bg-[#004047] hover:text-white transition-all ease-linear duration-200 '
            onClick={() => router.push('/contact')}>
                contact us
            </p>
        </div>
        <div className='absolute -bottom-9 '>
            <img src="./assets/bg-pattern-home-6-about-5.svg" alt="" />
        </div>
    </div>
  )
}

export default PreFooter