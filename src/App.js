import Advantages from './components/Advantages';
import Catalog from './components/Catalog';
import CataloBlock from './components/CatalogBlock';
import Header from './components/Header';
import Partners from './components/Partners';
import Services from './components/Services';
import './styles/main.scss';
import Dropdown from './ui/Dropdown/Dropdown';

function App() {
  return (
    <div>
      <Header />
      <Partners />
      <Services />
      <Catalog />
      <CataloBlock />
      <Advantages />
      <Dropdown />
    </div>
  );
}

export default App;
