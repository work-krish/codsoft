import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'


import About from "./portfolio/About"
import HeroSection from './portfolio/bottom.jsx'
import Footer from './portfolio/footer.jsx'
import SkillsSection from './portfolio/skills.jsx'
import CertificationSection from './portfolio/certificate.jsx'
import Resume from './portfolio/Resume.jsx'


const router = createBrowserRouter([{
     
    path: "/",
    element: <Layout/>,
    children: [
      {  path: "",
         element: < HeroSection/> 
      },
      {
        path: "/footer",
        element: <Footer/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/skills",
        element: <SkillsSection/>
      }]
  }], {
    basename: "/codsoft", // 👈 your GitHub repo name here
  }

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
