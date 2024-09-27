import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Router, Routes, Route, Navigation, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import HomePage from "./pages/HomePage"
import ProtectedRoute from "./components/PretectedRoute"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

const router = createBrowserRouter([
  { path: "/", element: <HomePage />},
  { path: "/Login", element: <Login />},
  { path: "/Register", element: <Register />},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
