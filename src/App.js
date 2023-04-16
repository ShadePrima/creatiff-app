import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage'

import './styles/main.scss'
import InfoCardPage from './pages/InfoCardPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:id' element={<InfoCardPage />} />
      </Routes>
    </div>
  )
}

export default App
