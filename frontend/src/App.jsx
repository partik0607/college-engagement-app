import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import LoginSignup from "./Pages/Login-Signup/Login";
import Home from "./Pages/Home/Home";
import Createpost from "./Pages/Createpost/Createpost";
import CoustomcollegeContext from "./Context/College_context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Notices from "./Pages/Notices/Notices";
import Interview_Experinces from "./Pages/Interview_Experinces/Interview_Experinces";
import BlogModal from "./Components/BlogPopup.jsx/BlogPopup";

function App() {
  return (
    <CoustomcollegeContext>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<LoginSignup />} />

        <Route
          path="/Home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/Create"
          element={
            <>
              <Navbar />
              <Createpost />
            </>
          }
        />
        <Route
          path="/Blogs"
          element={
            <>
              <Navbar />
              <Blogs />
            </>
          }
        />
        <Route
          path="/Notices"
          element={
            <>
              <Navbar />
              <Notices />
            </>
          }
        />
        <Route
          path="/Blogs"
          element={
            <>
              <Navbar />
              <Blogs />
            </>
          }
        />
        <Route
          path="/Interview_Experinces"
          element={
            <>
              <Navbar />
              <Interview_Experinces />
            </>
          }
        />
        <Route
          path="view"
          element={
            <>
              <Navbar />
              <BlogModal />
            </>
          }
        />
      </Routes>
    </CoustomcollegeContext>
  );
}

export default App;
