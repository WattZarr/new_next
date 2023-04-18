import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {MdLocationPin} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {IoLogoYoutube } from 'react-icons/io'

const Contact = () => {
  return (
    <div className='bg-white pt-32 pb-4'> 
    <div className='w-[80%] mx-auto h-full'>
       <div className='flex items-start justify-between'>
            <div className='w-[48%]'>
                <h1 className='text-3xl font-bold mb-4'>Subscribe</h1>
                <form className='border-2 border-dark-green p-2 rounded-lg h-[30vh]'>
                  <div class="mb-2">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-light-green focus:border-light-green block w-full p-2.5" placeholder="your name" required />
                  </div>
                  <div class="mb-2">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-light-green focus:border-light-green block w-full p-2.5" placeholder="yourname@gmail.com" required />
                  </div>
                 
                  <button className='px-4 py-2 bg-dark-green hover:bg-white hover:text-dark-green trasnform trasnition duration-100 border-2 border-dark-green rounded-lg text-white'>Register</button>
                </form>

            </div>
            <div className='w-[48%] '>
            <h1 className='text-3xl font-semibold '>Ways to Contact us</h1>
            <div className='border-2 border-dark-green p-2 rounded-lg mt-4 h-[30vh]'>
            <p className='flex items-center gap-2 text-lg text-dark-green my-4'> <BsFillTelephoneFill/> <a href="tel:+959788889170">09788889170</a> </p>
            <hr />
            <p className='flex items-center gap-2 text-lg text-dark-green my-4'> <TfiEmail/> <a href="mailto:newnextuniversity@gmail.com">newnextuniversity@gmail.com</a> </p>
            <hr />
            <p className='flex items-center gap-2 text-lg text-dark-green my-4'> <MdLocationPin/> <a href="https://goo.gl/maps/4YLZys5E6APgrq3R6" target={"__"}>New Next University Block 5, Unit 10, Mingalar Mandalay</a> </p>
            </div>
        </div>
       </div>
       <div className='flex justify-center items-center px-8 py-12 bg-dark-blue text-white mt-8 text-lg'>
            <p>To subscribe to our updates, simply provide us with your email address and we'll take care of the rest. Rest assured that your information will be kept confidential and will not be shared with any third-party.</p>   
       </div>
       <div className='flex justify-center gap-32 px-8 py-12 bg-dark-green text-white text-lg'>
          <h2><span className='text-xl'>Office Hours</span> : 9:00 AM - 8:00 PM</h2>
          <p className='flex items-center gap-5 text-xl'>Social Media :<a href="https://www.facebook.com/newnextuniversity"><BsFacebook/></a> <IoLogoYoutube/> </p>
       </div>
    </div>
    </div>
  )
}

export default Contact