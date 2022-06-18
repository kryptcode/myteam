import React from 'react'
import SectionACard from './SectionACard'

const SectionA = () => {
  return (
    <div className='bg-[#012f34] py-32 relative overflow-x-hidden'>
        <div className='w-[85%] mx-auto '>
            <div className='h-[4px] bg-[#f67e7e] w-16 mb-14 ' />
            <div className='flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-7 md:space-y-0 justify-between'>
                <div className='flex-1 text-white text-5xl font-bold'>
                    <h2 className='w-[80%] '>
                    Build & manage distributed teams like no one else.
                    </h2>
                </div>
                <div className='flex-1 text-white flex flex-col space-y-10'>
                    <SectionACard img={'./assets/icon-person.svg'} title='Experienced Inviduals' text='Our network is made up of highly experienced professionals who are passionate about what they do. ' />
                    <SectionACard img={'./assets/icon-cog.svg'} title='Easy to Implement' text='Our processes have been refined over years of implementation meaning our teams always deliver. ' />
                    <SectionACard img={'./assets/icon-chart.svg'} title='Enhanced Productivity' text='Our customized platform with in-built analytics helps you manage your distributed teams.  ' />
                </div>
            </div>
        </div>
        <div className='absolute md:hidden block top-0 -right-16'>
            <img src="./assets/bg-pattern-home-3.svg" alt="" />
        </div>
        <div className='absolute hidden md:block bottom-0 -right-40'>
            <img src="./assets/bg-pattern-home-3.svg" alt="" />
        </div>
    </div>
  )
}

export default SectionA