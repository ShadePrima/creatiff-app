import Catalog from './components/Catalog';
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
    </div>
  );
}

export default App;
