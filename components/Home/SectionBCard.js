import React from 'react'

const SectionBCard = ({ quote, name, position, img}) => {
  return (
    <div className='flex-1 flex flex-col items-center space-y-4 text-center relative'>
      <h3 className='font-semibold text-lg'>
        {quote}
      </h3>
      <div>
      <h5 className='text-[#79c8c7] text-xl font-semibold mb-1'>
        {name}
      </h5>
      <p className='italic text-sm'>
        {position}
      </p>
      </div>
      <img src={img} alt="" className='w-16 rounded-full border-2' />
      <div>
        <img src="./assets/icon-quotes.svg" className='absolute top-0 left-1/2 opacity-50 -translate-x-1/2' alt=" " />
      </div>
    </div>
  )
}

export default SectionBCard