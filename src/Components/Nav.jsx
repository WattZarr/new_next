import React from 'react'
import Logo1 from '../assets/logo1.png'
import { Link, NavLink } from 'react-router-dom'
import {HiOutlineMenu} from 'react-icons/hi'

const Nav = () => {

  const handleToggle = () => {
    document.querySelector('#toggle').classList.toggle('translate-y-[-500%]');
    document.querySelector('#nav').classList.toggle('border-b-2');
    document.querySelector('#toggle').classList.toggle('border-b-2');

    
  }

  return (
      <div className='text-black py-4 w-[80%] bg-white absolute mx-auto middle border-b-2 border-b-black z-20' id='nav'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                  <img src={Logo1} className='w-[24%]  cursor-pointer' />
              </div>
              <div className='hidden lg:flex gap-8 tracking-wider md:hidden'>
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
              <div className='md:text-3xl font-bold lg:hidden md:block cursor-pointer' onClick={handleToggle}>
              <HiOutlineMenu/>
              </div>
            </div>
          <div className='translate-y-[-500%] border-b-black absolute transition ease-in duration-300 w-full z-0 bg-white' id='toggle'>
            <ul>
            <NavLink to="/"  
                  className={({ isActive }) => 
                  (isActive ? "active-li" : "")}>
                      <li className='cursor-pointer px-2 py-1'>Home</li></NavLink>
                <NavLink to="about"
                  className={({ isActive }) => 
                  (isActive ? "active-li" : "")}><li className='cursor-pointer px-2 py-1'>About Us</li></NavLink>
              <NavLink to="courses"
              className={({ isActive }) => 
              (isActive ? "active-li" : "")}>
                <li className='cursor-pointer px-2 py-1'>Course</li>
              </NavLink>
              <NavLink to="contact"
              className={({ isActive }) => 
              (isActive ? "active-li" : "")}>
                <li className='cursor-pointer px-2 py-1'>Contact</li>
              </NavLink>
            </ul>
          </div>
      </div>

  )
}

export default Nav