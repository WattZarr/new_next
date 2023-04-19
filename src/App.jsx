import React from 'react'
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Nav from './Components/Nav';
import About from './pages/About';
import Course from './pages/Course';
import Contact from './pages/Contact';
import Register from './pages/Register';

const App = () => {

  return (
    <div className='font-asap-normal'>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/courses" element={<Course/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path="/register/:id" element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App

