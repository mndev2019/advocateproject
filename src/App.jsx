import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Career from './Pages/Career'
import Blogs from './Pages/Blogs'
import Services from './Pages/Services'
import SingleBlog from './Pages/Blogs/SingleBlog'
import SingleService from './Pages/Services/SingleService'



function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout />}>
        <Route index element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/career' element={<Career />} />
        <Route path='knowledge-corner' element={<Blogs/>}/>
        <Route path='/services/' element={<Services/>}/>
        <Route path='/blogs/:url' element={<SingleBlog/>} />
        <Route path='/services/:url' element={<SingleService/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
    </>
  )
}

export default App
