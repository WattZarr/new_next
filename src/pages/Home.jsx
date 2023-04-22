import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import Student from '../assets/student.svg'
import ScrollReveal from 'scrollreveal'
import {FaUniversity} from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'
import {BsNewspaper} from 'react-icons/bs'
import {AiOutlineCopyright} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Home = () => {

    var slideRight = {
        distance: '60%',
        origin: 'left',
        opacity: null
    };

    var slideLeft = {
        distance: '30%',
        origin: 'right',
        opacity: null,
    };

    var slideUp = {
        distance: '70%',
        origin: 'bottom',
        opacity: null,
    };

    useEffect(()=>{
        ScrollReveal().reveal('.welcome-text',slideRight)
    },[])

    useEffect(() => {
        ScrollReveal().reveal('.sec',slideUp)
    },[])


    useEffect(()=>{
        ScrollReveal().reveal('.illu',slideLeft)
    })

    
    return (
    <>
        <div className='bg-white py-32 xl:h-[75vh] md:h-[60vh]'> 
            <div className='w-[80%] mx-auto h-full'>
                <div className='flex items-center py-16 h-full'>
                    <div className=' text-dark-blue welcome-text'>
                        <h1 className='text-3xl font-extrabold tracking-widest mb-8'>Welcome to New Next University</h1>
                        <p className='text-lg text-dark-blue'>NEW NEXT နဲ့အတူ နိုင်ငံတကာနဲ့ ပြည်တွင်းမှာခိုင်မာတဲ့ Career တစ်ခုကို <br /> တည်ဆောက်လိုက်ပါ။</p> 
                        <Link to="/courses">
                            <button className='px-4 py-2 bg-dark-green hover:bg-white hover:text-dark-green trasnform trasnition duration-100 border-2 border-dark-green rounded-lg mt-8 text-white'>Apply Now</button>
                        </Link>
                    </div>
                    <div className='hidden md:flex justify-end  illu'>
                        <img src={Student} alt=""  className='w-[50%]'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-8 bg-dark-green xl:h-[25vh] lg:mt-24 xl:mt-4'>
            <div className='w-[80%] mx-auto flex flex-col md:flex-row gap-5 transform -translate-y-[10%] md:-translate-y-[50%] sec'>
                <div className='bg-dark-blue px-4 py-6 rounded shadow-lg transform ease-in hover:scale-105 transition duration-200 lg:h-[38vh] md:py-2 sm:py-2'>
                    <FaUniversity className='text-white text-2xl mb-2' />
                    <h1 className='font-bold text-white mb-4'>Why Study at New Next?</h1>
                    <p className='text-slate-100 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore tempora odit earum quasi animi ducimus at corporis quos, quia, repellendus molestiae alias.</p>
                </div>
                <div className='bg-dark-blue px-4 py-6 rounded shadow-lg transform ease-in hover:scale-105 transition duration-200 lg:h-[38vh] md:py-2 sm:py-2'>
                    <IoIosPeople className='text-white text-2xl mb-2' />
                    <h1 className='font-bold text-white mb-4'>Campus Life</h1>
                    <p className='text-slate-100 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore tempora odit earum quasi animi ducimus at corporis quos, quia, repellendus molestiae alias.</p>
                </div>
                <div className='bg-dark-blue px-4 py-6 rounded shadow-lg transform ease-in hover:scale-105 transition duration-200 lg:h-[38vh] md:py-2 sm:py-2'>
                    <BsNewspaper className='text-white text-2xl mb-2' />
                    <h1 className='font-bold text-white mb-4'>News And Events</h1>
                    <p className='text-slate-100 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore tempora odit earum quasi animi ducimus at corporis quos, quia, repellendus molestiae alias.</p>
                </div>
            </div>
            {/* footer */}
            <p className='text-xs text-white flex items-center justify-center font-light absolute bottom-1 left-[50%] trasnform -translate-x-[50%]'>
                <AiOutlineCopyright className='mr-1'/>New Next University 2023
            </p>
        </div>
    </>
    
  )
}

export default Home