import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from "./components/User/User.jsx"
import Github from './components/GitHub/Github.jsx'
const router= createBrowserRouter([
  {
    path : '/',
    element :<Layout></Layout>,
    children : [
      {
        path :"",
        element :<Home></Home>
      },
      {
        path :"about",
        element :<About></About>
      },
      {
        path :"contact",
        element:<Contact></Contact>
      },{
        path :"user/:id",
        element :<User></User>
      },
      {
       
        path :"github",
        element :<Github></Github>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)
