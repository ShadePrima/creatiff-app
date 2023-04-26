import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage'

import './styles/main.scss'
import InfoCardPage from './pages/InfoCardPage'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:id' element={<InfoCardPage />} />
      </Routes>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
