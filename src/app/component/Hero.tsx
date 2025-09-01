import React from 'react'
import Link from 'next/link'
import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils";

function Hero() {
  return (
   <>
   <Boxes />
    <div className={"h-screen w-full px-[10%] flex justify-center items-center text-center"}>
            <div className='flex flex-col items-center gap-5'>
                <h1 className={cn("text-[7vw]   font-bold text-white relative z-20")}>Master the art of coding</h1>
                <p className={cn("w-[70%] font-semibold text-white relative z-20 text-xl")}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem hic tenetur sapiente quod. Ipsa at impedit eveniet, maxime, voluptatibus expedita a, sapiente corporis error temporibus mollitia? Temporibus suscipit ab sunt commodi perspiciatis beatae consequatur?</p>
                <Link href="/courses" className={cn("mt-14 z-20 relative py-5 px-10 border border-[#fefefe] rounded-2xl font-semibold cursor-pointer")}>Explore Courses</Link>
            </div>
        </div>
        
   </>
  )
}

export default Hero
