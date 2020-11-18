import './App.css';

// Components
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Properties from './components/properties/Properties';
import Sold from './components/sold/Sold';

// Router
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">

    <Header />

    <Switch>
      <Route exact path='/' component={Home} /> 
      <Route path='/about' component={About} />
      <Route path='/properties' component={Properties} />
      <Route path='/contact' component={Contact} />
      <Route path='/sold' component={Sold} />
    </Switch>
    
    <Footer />
    </div>
  );
}

export default App;
