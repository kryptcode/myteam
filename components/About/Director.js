import { useState } from 'react'
import  { PlusIcon, XIcon } from '@heroicons/react/solid'

const Director = ({ img, name, position, text }) => {
  const [showText, setShowText] = useState(false)
  return (
        <div className='bg-[#012f34] relative h-72 transition-all ease-linear duration-200'>
            {
              showText ? (
                <div className='py-12 text-center text-white'>
                  <h5 className='text-[#79c8c7] text-xl font-semibold'>
                    {name}
                  </h5>
                  <p className='px-12 mt-4 font-semibold'>
                  {text}
                  </p>
                  <div className='flex items-center justify-center space-x-3 mt-4'>
                    <img src="./assets/icon-linkedin.svg" alt="" className='cursor-pointer hover:opacity-50 hover:scale-95' />
                    <img src="./assets/icon-twitter.svg" alt="" className='cursor-pointer hover:opacity-50 hover:scale-95' />
                  </div>
                </div>
              ) : (
                <div className='flex flex-col items-center py-12'>
                <img src={img} alt="" className='w-24 rounded-full border-2 border-white' />
                <h5 className='text-[#79c8c7] text-lg font-semibold my-2'>
                  {name}
                </h5>
                <p className='italic font-semibold text-white'>
                  {position}
                </p>
                </div>
              )
            }
            <button onClick={() => setShowText(!showText)} className='vex absolute left-1/2 p-3 text-[#012f34] rounded-full -bottom-10 bg-[#f67e7e] hover:bg-[#79c8c7] '>
              {
                showText ? (
                  <XIcon className='h-6' />
                ) : (
                  <PlusIcon className='h-6' />
                )
              }
            </button>
        </div>
  )
}

export default Director