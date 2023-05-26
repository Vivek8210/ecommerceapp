import React from 'react'
import { Route, Routes } from 'react-router-dom'

import KidsAllitems from '../ShoppingContent/KidsItems/KidsAllitems'
import MenAllitems from '../ShoppingContent/MenItems/MenAllitems'
import NewArrivalitems from '../ShoppingContent/NewArrivaliems/NewArrivalItems'
import AllWomenItems from '../ShoppingContent/WomenItems/AllWomenItems'
import Home from '../pages/Home'
import Fashion from '../pages/Fashion'
import Electronics from '../pages/Electronics'
import HomeAppliance from '../pages/HomeAppliance'
import Mobile from '../pages/Mobile'

const AllRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/fashion" element={<Fashion/>} />
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/homeappliance" element={<HomeAppliance/>}/>
        <Route path="/mobile" element={<Mobile/>} />
        
    </Routes>
  )
}

export default AllRoute