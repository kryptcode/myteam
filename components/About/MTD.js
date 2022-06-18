import React from 'react'
import Director from './Director'

const MTD = () => {
  return (
    <div className='bg-[#004047] overflow-x-hidden relative'>
        <div className='w-[85%] mx-auto py-32'>
            <h2 className='text-center text-white text-5xl font-bold mb-10'>
                Meet the directors
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <Director 
                    name='Nikita Marks' 
                    position='Founder & CEO' 
                    img='./assets/avatar-nikita.jpg' 
                    text='“It always amazes me how much talent there is in every corner of the globe.” ' 
                />
                <Director 
                    name='Christian Duncan' 
                    position='Co-founder & CEO' 
                    img='./assets/avatar-christian.jpg' 
                    text='“Distributed teams required unique processes. You need to approach work in a new way.” ' 
                />
                <Director 
                    name='Cruz Hamer' 
                    position='Co-founder & CTO' 
                    img='./assets/avatar-cruz.jpg' 
                    text='“Technology is at the forefront of enabling distributed teams. That is where we come in.”  ' 
                />
                <Director 
                    name='Drake Heaton' 
                    position='Business Development Lead' 
                    img='./assets/avatar-drake.jpg' 
                    text='“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.” ' 
                />
                <Director 
                    name='Griffin Wise' 
                    position='Lead Marketing' 
                    img='./assets/avatar-griffin.jpg' 
                    text='“Unique perspectives shape unique products, which is what you need to survive these days.”' 
                />
                <Director 
                    name='Aden Allen' 
                    position='Head of Talent' 
                    img='./assets/avatar-aden.jpg' 
                    text='“Empowered teams create truly amazing products. Set the north star and let them follow it.” ' 
                />
            </div>
        </div>
        <div className='absolute top-0 -left-36'>
            <img src="./assets/bg-pattern-about-2-contact-1.svg" alt="" />
        </div>
        <div className='absolute bottom-0 -right-10'>
            <img src="./assets/bg-pattern-home-4-about-3.svg" alt="" />
        </div>
    </div>
  )
}

export default MTD