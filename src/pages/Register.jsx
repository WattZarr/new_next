import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {IoMdArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();
  const {id} = useParams();  
  const [course,setCourse] = useState({});
  const [courseName , setCourseName] = useState("");

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [education,setEducation] = useState("");
  const [transaction,setTransaction] = useState("");

  const getCourse = () => {
    axios.get(`http://localhost:4000/api/${id}`).then((response) => 
    {
      setCourse(response.data)
      setCourseName(course.title)
    }
    ).catch((error) => console.log(error));
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const fData = new FormData();
    fData.append("transaction",transaction)
    fData.append("name",name)
    fData.append("email",email)
    fData.append("phone",phone)
    fData.append("education",education)
    fData.append("course",courseName)

    axios.post('http://localhost:4000/api/register',fData).then((response) => {
      console.log(response.status);
    }).catch((error) => console.log(error))

    Swal.fire('You complete registration for this course.Our Admission Team will contact you in a minute.Thanks You')
    setTimeout(() => {
      navigate('/')
    },5000)
      
  }

  useEffect(() => {
    getCourse();
  })
    
  return (
<div className='bg-white pt-32 pb-4'> 
<div className='w-[80%] mx-auto h-full'>
    <Link to='/courses'>
    <p className='flex items-center gap-1 cursor-pointer'><IoMdArrowBack className='text-dark-green text-2xl'></IoMdArrowBack>Back</p>
    </Link>
    <h1 className='text-xl font-bold mt-4'>Provide us with the necessary fields and details to register the course - {course.title}</h1>

    <div className=''>
    <form className='mt-8 text-black' encType="multipart/form-data" method='post' onSubmit={handleRegister}>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" onChange={(e) => setName(e.target.value)} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" onChange={(e) => setPhone(e.target.value)} name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" onChange={(e) => setEducation(e.target.value)} name="education" id="education" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="education" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Education</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="file" onChange={(e) => setTransaction(e.target.files[0])} name="transaction" id="transaction" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="transaction" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Transaction</label>
      </div>
      <button type="submit" className="text-white border-2 bg-dark-green hover:bg-white hover:text-dark-green hover:border-dark-green focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Register</button>
    </form>

  </div>
</div>
</div>
  )
}

export default Register