import './App.css';

import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="app">
    <div className="topSection">
        <About />
        <Contact />
    </div>
    </div>
  );
}

export default App;
