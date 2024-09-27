import React from "react";
import { Router, Routes, Route, Navigation } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import HomePage from "./pages/HomePage"
import ProtectedRoute from "./components/PretectedRoute"


function App(){
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path="/"
            element={
              <ProtectedRoute>
                <HomePage></HomePage>
              </ProtectedRoute>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Login />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App