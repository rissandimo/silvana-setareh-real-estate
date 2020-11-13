import './App.css';

// Components
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Slideshow from './components/slideshow/Slideshow';

// Router
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">

    <Header />

    <Switch>
      <Route path='/' component={Home} /> 
    </Switch>
    
    <Footer />
    </div>
  );
}

export default App;
