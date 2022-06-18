import React from 'react'
import { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter()
  return (
    <footer className='bg-[#002529] py-8 text-white    '>
        <div className='w-[85%] mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-16'>
            <div className='flex flex-col justify-between items-center md:items-start'>
                <div>
                <img src="./assets/logo.svg" alt="" />
                </div>
                <div className='flex space-x-4 font-medium text-lg'>
                    <p className='hover:text-[#f67e7e] cursor-pointer font-semibold' onClick={() => router.push('/')}>
                        home
                    </p>
                    <p className='hover:text-[#f67e7e] cursor-pointer font-semibold' onClick={() => router.push('/about')}>
                        about
                    </p>
                </div>
            </div>
            <div className='flex-grow space-y-1.5 font-semibold text-center md:text-left text-gray-400'>
                <p>987 Hillcrest Lane</p>
                <p>Irvine, CA</p>
                <p>Carlifornia 92714</p>
                <p>Call Us: 949-843-7432</p>
            </div>
            <div className='flex flex-col justify-between text-gray-400 items-center md:items-end font-medium'>
                <div className='flex space-x-6'>
                    <img className='hover:opacity-70 cursor-pointer' src="./assets/icon-facebook.svg" alt="" />
                    <img className='hover:opacity-70 cursor-pointer' src="./assets/icon-pinterest.svg" alt="" />
                    <img className='hover:opacity-70 cursor-pointer' src="./assets/icon-twitter.svg" alt="" />
                </div>
                <div>
                Copyright 2020. All Rights Reserved
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer