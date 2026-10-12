/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Logo from "@/assets/logo";
import next from "@/public/assets/nextlogo.svg";
import Link from "next/link";
import PH from "@/public/assets/phlogo.svg";
import Image from "next/image";
export default function Hero() {
    const courses = [
        {
          id: 1,
          href: "https://web.programming-hero.com/home/level2",
          label: "Next Level Web Development",
          des: "Next Level Web Development",
          color: "text-gray-300",
        },
      ];
  return (
    <section className="py-10 sm:py-28  min-[369px]:px-2 sm:px-4 mx-auto flex-col flex justify-center w-full">
    <div className="  text-center ">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl  w-full font-bold mb-5 sm:mb-10 sm:w-xl md:w-2xl lg:w-3xl mx-auto">
        Thrive Beyond Limits, Next Begins Here
      </h2>
      <div className=" ">
        <div className="  text-sm sm:text-base gap-x-1 items-center md:text-lg lg:text-xl  font-semibold sm:font-bold ">
          This is a documentation project to capture our learning journey
          from the {courses.map((course) => (
            <Link
              href={course.href}
              key={course.id}
              className="    rounded-xl gap-1 sm:gap-1.5  inline-flex translate-y-1.5  sm:hidden   items-center hover:shadow-lg transition-all duration-300 flex-wrap"
            >
              <Image
                alt="next"
                width={10000}
                height={10000}
                className="  w-8 sm:w-10.5"
                src={next}
              />
              <span
                className={`${course.color}  sm:text-nowrap  font-bold bg-gradient-to-r  hover:border-b hover:border-purple-500  h-5   md:hover:translate-y-[0.05rem] from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text hover:underline inline-block`}
              >
                {course.des}
              </span>
            </Link>
          ))}
        </div>
        <div className="  inline-flex   justify-center flex-wrap items-center gap-x-1 sm:gap-x-2 gap-y-1  font-semibold sm:font-bold text-sm sm:text-base md:text-lg lg:text-xl  mt-0.5 sm:mt-2">
          {/* Course Link */}
          {courses.map((course) => (
            <Link
              href={course.href}
              key={course.id}
              className="    rounded-xl gap-1.5 hidden sm:flex items-center hover:shadow-lg transition-all duration-300"
            >
              <Image
                alt="next"
                width={10000}
                height={10000}
                className="w-10.5"
                src={next}
              />
              <span
                className={`${course.color} text-nowrap font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text hover:border-b hover:border-purple-500   md:hover:translate-y-[0.05rem]  inline-block`}
              >
                {course.des}
              </span>
            </Link>
          ))}
          {/* "course by" and PH logo */}
          <span className="inline-flex items-center text-nowrap  ">
            <p className="  w-9 sm:w-12  md:w-15  lg:w-17">
            course by
            </p>
            <a
              href="https://web.programming-hero.com"
              className="text-blue-500 hover:underline flex items-center ml-1 "
            >
              <Image
                alt="PH logo"
                width={10000}
                height={10000}
                className="w-8 sm:w-10  -translate-y-1.5 sm:-translate-y-2 translate-x-5"
                src={PH}
              />
              <span className="ml-1 text-nowrap">rogramming Hero.</span>
            </a>
          </span>
          {/* Built with Nextra */}
          <span className="inline-flex items-center">
            Built with
            <a
              href="https://nextra.site/"
              className="text-blue-500 hover:underline ml-1"
            >
              Nextra.
            </a>
          </span>
        </div>
      </div>
      <div className="flex gap-4  mt-4 md:mt-5   lg:mt-6 w-full justify-center items-center  font-semibold sm:font-bold">
        <Link
          href="/0_gettingstarted"
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  rounded-lg sm:rounded-xl   px-4 md:px-5    lg:px-6    py-3 md:py-3.5  lg:py-4  text-center cursor-pointer  text-xs sm:text-sm md:text-base lg:text-lg"
        >
          Getting Started
        </Link>
        <Link
          href="https://web.programming-hero.com/home/level2"
          type="button"
          className="animated-gradient w-fit overflow-hidden text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:bg-gradient-to-br  rounded-lg sm:rounded-xl      px-4 md:px-5    lg:px-6    py-3 md:py-3.5  lg:py-4  text-center text-xs sm:text-sm md:text-base lg:text-lg  flex gap-2 cursor-pointer backdrop:invert"
        >
          <Image
            alt="next"
            width={10000}
            height={10000}
            className="   w-6 sm:w-9 md:w-10 lg:w-10.5"
            src={next}
          />
          Explore Course
        </Link>
      </div>
    </div>
  </section>
  )
}
