import React from 'react'
import { Route, Routes } from 'react-router-dom'



import Fashion from '../pages/Fashion'
import Electronics from '../pages/Electronics'
import HomeAppliance from '../pages/HomeAppliance'
import Mobile from '../pages/Mobile'
import Cart from '../pages/Cart'

const AllRoute = () => {
  return (
    <Routes>
       
        <Route path="/fashion" element={<Fashion/>} />
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/homeappliance" element={<HomeAppliance/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/mobile" element={<Mobile/>} />
        
    </Routes>
  )
}

export default AllRoute