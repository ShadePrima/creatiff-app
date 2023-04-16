import React from 'react'
import Header from '../components/Header'
import InfoCardV2 from '../components/InfoCardV2/InfoCardV2'
import Partners from '../components/Partners'
import Catalog from '../components/Catalog'
import CataloBlock from '../components/CatalogBlock'
import Gallery from '../components/Gallery/Gallery'
import Advantages from '../components/Advantages'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const MainPage = () => {
  return (
    <div>
      <Header />
      <InfoCardV2 />
      <Partners />
      <Catalog />
      <CataloBlock />
      <Gallery />
      <Advantages />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default MainPage
