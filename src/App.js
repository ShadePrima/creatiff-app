import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage'

import './styles/main.scss'
import InfoCardPage from './pages/InfoCardPage'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import axios from 'axios'

function App() {
  const [response, setResponse] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'a85209c71a4e401ed0e08eecf370c87c7b4bbb88'
        const res = await axios.post(
          'http://16.16.208.23:8000/multilingual-text/',
          {
            headers: {
              Authorization: `Token ${token}`,
              'Content-Type': 'application/json',
            },
          }
        )
        setResponse(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

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
