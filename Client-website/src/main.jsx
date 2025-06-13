import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Academics from './pages/Academics.jsx'
import Admission from './pages/Admission.jsx'
import Contact from './pages/Contact.jsx'
import Events from './pages/Events.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :
    [
      {
      path : "/",
      element : <Home />
     },
      {
      path : "/about",
      element : <About />
     },
     {
      path : "/academics",
      element : <Academics />
     },
     {
      path : "/events",
      element : <Events />
     },
     {
      path : "/contact",
      element : <Contact />
     },
     {
      path : "/admission",
      element : <Admission />
     },
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
