import React from 'react'

const Modal = () => {
  return (
    <div className=' bg-[#2c6269] flex flex-col items-center text-white py-24 space-y-12 mt-4 md:hidden transition-all ease-in duration-200'>
        <p className='cursor-pointer hover:text-[#f67e7e] transition-all ease-in duration-200 text-2xl'>
            home
        </p>
        <p className='cursor-pointer hover:text-[#f67e7e] transition-all ease-in duration-200 text-2xl'>
            about
        </p>
        <div>
          <button className='py-3 px-5 border-2 border-white rounded-3xl text-white text-xl transiton-all duration-200 hover:bg-white hover:text-[#014e56] font-semibold ease-linear'>
              contact us
          </button>
        </div>
    </div>
  )
}

export default Modal