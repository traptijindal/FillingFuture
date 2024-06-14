import React from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import About from './Pages/About'
import Sponsor from './Pages/Sponsor'
import Donatemonthly from './Pages/Donatemonthly'
import DonateOnce from './Pages/DonateOnce'
import Spring from './Pages/Spring'
import Home from './Pages/Home'

import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
   
    <div className='relative'>
      <Navbar className=''/>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/sponsor" element={<Sponsor/>}/>
            <Route path="/donate-monthly" element={<Donatemonthly/>}/>
            <Route path="/donate-Once" element={<DonateOnce/>}/>
            <Route path="/subscription" element={<Spring/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>
   
  )
}

export default App
