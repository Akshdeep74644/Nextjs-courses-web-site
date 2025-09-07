import React from 'react'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import mentorData from "./data/people.json"
import { Vortex } from "./ui/vortex";

function Mentor() {
  return (
    <>
        <Vortex backgroundColor="black">
      <div className='h-screen py-[5%] gap-10 flex-col w-full flex justify-center items-center'>
        <div className='text-center'>
        <h1 className='text-9xl font-bold'>Meet Our Mentors</h1>
        <p className='text-3xl mt-5'>Professional who will guide your musical journey.</p>
      </div>

      <div className="flex flex-row items-center justify-center mb-10 mt-14 w-full">
      <AnimatedTooltip items={mentorData} />
    </div>
      </div>
    </Vortex>
    </>
  )
}

export default Mentor
