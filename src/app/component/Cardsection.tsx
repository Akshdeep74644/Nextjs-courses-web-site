"use client"
import React from "react";
import courseData from "./data/courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

function cardsection() {
  return (
    <div className="h-sreen w-full flex px-[5%] py-10 justify-center flex-col gap-14 items-center bg-[#000]">
      <div className="text-center">
        <h1 className="text-7xl font-semibold">Featured Courses</h1>
        <p className="text-3xl font-bold">Learn With Best Material.</p>
      </div>
    <div className="flex flex-wrap justify-center items-center gap-10">
       {courseData.map((data,index) => (
       <BackgroundGradient key={index} className="max-w-lg mx-auto bg-[#000] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-[#f1f1f1] mb-2">
            {data.courseName}
          </h1>
          <p className="text-[#f1f1f1] mb-4">
            {data.courseDescription}
          </p>
          <h2 className="text-lg font-medium text-[#f1f1f1] mb-4">{data.courseDuration}</h2>
          <a
            href="#"
            className="inline-block px-5 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            {data.buttonText}
          </a>
        </div>
      </BackgroundGradient>
     ))}
    </div>
    <a
  href="#"
  className="inline-block px-6 py-3 rounded-xl bg-[#f1f1f1] text-[#000] font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
>
  View All Courses
</a>

    </div>
  );
}

export default cardsection;
