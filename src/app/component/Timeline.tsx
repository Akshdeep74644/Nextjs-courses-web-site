import React from 'react'
import timelineData from './data/timeline.json'
import { StickyScroll } from "./ui/sticky-scroll-reveal";

function timeline() {
  return (
    <>
      <div className='h-full w-full py-[7%] bg-[#000]'>

        <StickyScroll content={timelineData} />
      </div>
    </>
  )
}

export default timeline
