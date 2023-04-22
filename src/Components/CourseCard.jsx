import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdInformationCircleOutline} from 'react-icons/io'
import {AiOutlineClockCircle} from 'react-icons/ai'


const CourseCard = (data) => {

  const course = data.data;

  return (
    <div className='w-full md:w-[30%] my-2 transform ease-in hover:scale-105 transition duration-200 border-2 px-2 py-2'>
    <Link>
     <img src={`${import.meta.env.VITE_API_KEY}upload/${course.image}`} className='w-full h-[25vh]' alt="" />
     <h2 className='font-semibold text-lg'>{course.title}</h2>
     <div className='flex gap-3 items-center'>
          <p className='flex items-center gap-2 text-slate-500'><IoMdInformationCircleOutline className='text-xl'/>{course.level}</p>
          <p className='flex items-center gap-2 text-slate-500'><AiOutlineClockCircle className='text-xl'/>{course.duration}</p>
     </div>
     </Link>
     <Link to={`/register/${course._id}`} className='flex justify-end'><button className='px-2 py-1 text-sm bg-dark-green hover:bg-white hover:text-dark-green trasnform trasnition duration-100 border-2 border-dark-green rounded-lg mt-4 text-white'>Register</button></Link>
  </div>
  )
}

export default CourseCard