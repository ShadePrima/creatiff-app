import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage'

import './styles/main.scss'
import InfoCardPage from './pages/InfoCardPage'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import axios from 'axios'

function App() {
  // const [translate, setTranslate] = React.useState({})

  // console.log(translate, 'translate')

  // React.useEffect(() => {
  //   try {
  //     const token = '88e021c16c9e26ef55cdae66219a2f81a6665534'

  //     axios
  //       .get('http://16.16.208.23:8000/translations/', {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       })
  //       .then((res) => setTranslate(res.data))
  //       .catch((err) => console.log(err))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }, [])

  return (
    <div>
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
