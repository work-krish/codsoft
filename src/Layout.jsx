 import React from 'react'

 
import { Outlet } from 'react-router-dom'
import Navport from "./portfolio/Navport"


function Layout() {
  return (
    <>
 
      <Navport/>
      <Outlet/>
       
    </>
  )
}

export default Layout