import './App.css';
import Hero from './pages/hero';
import Nav from './pages/nav';

function App() {
  return (
    <main>
    <switch>
    <div className="App">
      <header className="App-header">
      <Nav/>
      <Hero/>
      </header>
    </div>
    </switch>
    </main>
  );
}

export default App;
