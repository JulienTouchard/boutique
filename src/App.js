
import './App.css';
import Boutique from './components/Boutique/Boutique';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <header>
        <Navigation></Navigation>
      </header>
      <main>
        <Boutique></Boutique>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
