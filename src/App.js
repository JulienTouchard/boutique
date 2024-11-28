
import './App.css';
import Boutique from './components/Boutique/Boutique';
import Navigation from './components/Navigation/Navigation';
import { BoutiqueProvider } from './contexts/BoutiqueContext';

function App() {
  return (
    <BoutiqueProvider>
      <header>
        <Navigation></Navigation>
      </header>
      <main>
       <Boutique></Boutique>
      </main>
      <footer></footer>
    </BoutiqueProvider>
  );
}

export default App;
