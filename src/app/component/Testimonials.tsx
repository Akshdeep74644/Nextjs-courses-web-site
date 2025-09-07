import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import testimonialsData from "./data/testimonials.json"

function Testimonials() {
  return (
    <>
    <div className='h-full w-full'>

    <div className='flex justify-center pt-14 items-center'>
         <h1 className='text-6xl font-bold'>Testimonial</h1>
        <p></p>
    </div>
       
         <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonialsData} direction="right" speed="slow"
      />
    </div>
    </div>
      
    </>
  )
}

export default Testimonials
