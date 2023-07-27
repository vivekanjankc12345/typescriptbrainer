import React from 'react'
import Homepage from '../Component/Homepage'
import Login from '../Component/Login'
import Register from '../Component/Register'
import {Routes,Route} from "react-router-dom"
import Adddata from '../Component/Adddata'
const Allrouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/adddata" element={<Adddata/>} />
      </Routes>
    </div>
  )
}

export default Allrouter
