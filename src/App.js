import './App.css';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Slideshow from './components/slideshow/Slideshow';

function App() {
  return (
    <div className="app">
    <Header />
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
