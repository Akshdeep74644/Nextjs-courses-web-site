import React from 'react'
import Hero from './component/Hero'
import Timeline from './component/Timeline'
import Cardsection from './component/Cardsection'
import Testimonials from './component/Testimonials'
import Mentor from './component/Mentor'

function page() {
  return (
    <>
        <Hero />
        <Cardsection />
        <Timeline />
        <Testimonials />
        <Mentor />
    </>
  )
}

export default page
