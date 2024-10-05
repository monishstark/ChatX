import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import OtpVerify from './pages/OtpVerify.jsx'
import Chatroom from './pages/Chatroom.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpVerify />} />
        <Route path="/chatroom" element={<Chatroom />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
