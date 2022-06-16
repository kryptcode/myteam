import React from 'react'

const SectionACard = ({ img, title, text }) => {
  return (
    <div className='flex flex-col md:flex-row space-x-0 md:space-x-3 items-center text-center md:text-left md:items-start'>
            <div className='w-32'>
                <img src={img} className='w-full' alt={text} />
            </div>
            <div>
                <h6 className='text-[#f67e7e] font-semibold text-xl mb-3'>
                    {title}
                </h6>
                <p className='font-medium text-lg'>
                    {text}
                </p>
            </div>
    </div>
  )
}

export default SectionACard