import React from 'react'
import SectionBCard from './SectionBCard'

const SectionB = () => {
  return (
    <div className='bg-[#004047] py-40 relative'>
      <img src="./assets/bg-pattern-home-4-about-3.svg" className='absolute top-0 -left-12' alt="" />
      <img src="./assets/bg-pattern-home-5.svg" className='absolute bottom-0 -right-16' alt="" />
        <div className='w-[85%] mx-auto text-white'>
            <h2 className='text-center w-[90%] mx-auto text-6xl font-bold mb-12'>
            Delivering real results for top companies. Some of our <span className='text-[#79c8c7] '>success stories.</span>
            </h2>

            <div className='flex flex-col md:flex-row space-y-9 md:space-y-0 justify-between'>
                <SectionBCard 
                  quote='“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”'
                  name='Kady Baker'
                  position='Product Manager at Bookmark'
                  img='./assets/avatar-kady.jpg'  
                />
                <SectionBCard 
                  quote='“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”'
                  name='Aiysha Reese'
                  position='Founder of Manage'
                  img='./assets/avatar-aiysha.jpg'  
                />
                <SectionBCard 
                  quote='“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.” '
                  name='Arthur Clarke'
                  position='Co-founder of myPhysio'
                  img='./assets/avatar-arthur.jpg'  
                />
            </div>
        </div>
    </div>
  )
}

export default SectionB