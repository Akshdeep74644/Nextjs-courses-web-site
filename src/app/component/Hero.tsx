import React from 'react'
import Link from 'next/link'
import { WavyBackground } from "./ui/wavy-background.tsx";

function Hero() {
  return (
   <>
  <WavyBackground className="max-w-8xl h-screen flex justify-center items-center mx-auto px-40">
            <div className='flex flex-col items-center gap-5'>
                <h1 className={"text-[7vw]   font-bold text-white relative z-20"}>Master the art of coding</h1>
                <p className={"w-[70%] text-center font-semibold text-white relative z-20 text-xl"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem hic tenetur sapiente quod. Ipsa at impedit eveniet, maxime, voluptatibus expedita a, sapiente corporis error temporibus mollitia? Temporibus suscipit ab sunt commodi perspiciatis beatae consequatur?</p>
                <Link href="/courses" className={"mt-14 z-20 relative py-5 px-10 border border-[#fefefe] rounded-2xl font-semibold cursor-pointer"}>Explore Courses</Link>
            </div>
    </WavyBackground>
   </>
  )
}

export default Hero
