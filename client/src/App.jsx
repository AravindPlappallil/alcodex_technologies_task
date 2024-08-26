import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Landing from './pages/Landing'
import Signup from './pages/signup'
import Header from './components/Header'
import Footer from './components/footer'


export default function App() {
  return (
    <BrowserRouter>
      <Header/> 
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/sign-up' element={<Signup/>} />
    </Routes>
<Footer/>
    </BrowserRouter>
  )
}
