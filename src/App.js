import React from 'react';

import Advantages from './components/Advantages';
import Catalog from './components/Catalog';
import CataloBlock from './components/CatalogBlock';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Partners from './components/Partners';
import Services from './components/Services';

import './styles/main.scss';

function App() {
  return (
    <div>
      <Header />
      <Partners />
      <Services />
      <Catalog />
      <CataloBlock />
      <Advantages />
      <ContactForm />
    </div>
  );
}

export default App;
