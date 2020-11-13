import './App.css';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Slideshow from './components/slideshow/Slideshow';

function App() {
  return (
    <div className="app">
    <div className="topSection">
        <About />
        <Contact />
    </div>
    <div className="middleSection">
        <Slideshow />
    </div>
        <Footer />
    </div>
  );
}

export default App;
