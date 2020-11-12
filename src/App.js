import './App.css';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Slideshow from './components/slideshow/Slideshow';

function App() {
  return (
    <div className="app">
    <div className="topSection">
        <About />
        <Contact />
    </div>
        <Slideshow />
    </div>
  );
}

export default App;
