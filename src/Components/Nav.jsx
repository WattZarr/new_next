import React from 'react'
import Logo1 from '../assets/logo1.png'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
      <div className='text-black flex items-center justify-between py-4 w-[80%] bg-white absolute mx-auto middle border-b-2 border-b-black'>
          <div className='flex items-center'>
              <img src={Logo1} className='w-[24%]  cursor-pointer' />
              {/* <h1 className='text-3xl bold  cursor-pointer tracking-wider'>New Next University</h1> */}
          </div>
          <div className='flex gap-8 tracking-wider'>
              <NavLink to="/"  
                className={({ isActive }) => 
                (isActive ? "active-link" : "")}>
                    <p className='cursor-pointer px-2 py-1'>Home</p></NavLink>
              <NavLink to="about"
                className={({ isActive }) => 
                (isActive ? "active-link" : "")}><p className='cursor-pointer px-2 py-1 w-32 text-center'>About Us</p></NavLink>
            <NavLink to="courses"
            className={({ isActive }) => 
            (isActive ? "active-link" : "")}>
              <p className='cursor-pointer px-2 py-1'>Course</p>
            </NavLink>
            <NavLink to="contact"
            className={({ isActive }) => 
            (isActive ? "active-link" : "")}>
              <p className='cursor-pointer px-2 py-1'>Contact</p>
            </NavLink>
          </div>
      </div>

  )
}

export default Nav