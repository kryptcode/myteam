import { useState } from 'react'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
import Modal from './Modal'
import { useRouter } from 'next/router'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

  return (
    <div className='bg-[#014e56] py-12 md:py-24'>
        <div className='w-[85%] mx-auto flex justify-between items-center '>
            <div>
                <img src="./assets/logo.svg" alt="" />
            </div>
            <div className='hidden md:flex flex-grow space-x-10 ml-24 text-xl font-semibold text-white'>
                <p className='cursor-pointer hover:text-[#f67e7e] transition-all ease-in duration-200 '
                onClick={() => router.push('/')}>
                    home
                </p>
                <p className='cursor-pointer hover:text-[#f67e7e] transition-all ease-in duration-200 '
                onClick={() => router.push('/about')}>
                    about
                </p>
            </div>
            <div className='hidden md:inline-block'>
                <button className='py-3 px-5 border-2 border-white rounded-3xl text-white text-xl transiton-all duration-200 hover:bg-white hover:text-[#014e56] font-semibold ease-linear '
                onClick={() => router.push('/contact')}>
                    contact us
                </button>
            </div>
            <div className='flex md:hidden' onClick={() => setIsOpen(!isOpen)}>

                {
                    isOpen ? (
                        <XIcon className='h-8 text-white cursor-pointer hover:scale-105 transition-all duration-200' />
                    ) : (
                        <MenuAlt1Icon className='h-8 text-white cursor-pointer hover:scale-105 transition-all duration-200' />
                    )
                }
            </div>
            
        </div>

        {
            isOpen && <Modal />
        }
    </div>
  )
}

export default Header