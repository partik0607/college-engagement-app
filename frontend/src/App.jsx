import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

import LoginSignup from './Pages/Login-Signup/Login'
import Home from './Pages/Home/Home'
import Createpost from './Pages/Createpost/Createpost'
import CoustomcollegeContext from './Context/College_context'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs'
import Notices from './Pages/Notices/Notices'
import Interview_Experinces from './Pages/Interview_Experinces/Interview_Experinces'
import BlogModal from './Components/BlogPopup.jsx/BlogPopup'

function App() {

  return (
      <CoustomcollegeContext>

          <Navbar/>
          <Routes>
          <Route path='/' element={<LoginSignup/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Create' element={<Createpost/>}/>
          <Route path='/Blogs' element={<Blogs/>}/>
          <Route path='/Notices' element={<Notices/>}/>
          <Route path='/Blogs' element={<Blogs/>}/>
          <Route path='/Interview_Experinces' element={<Interview_Experinces/>}/>
          <Route path='view' element={<BlogModal/>}/>
          </Routes>

      </CoustomcollegeContext>
  )
}

export default App
