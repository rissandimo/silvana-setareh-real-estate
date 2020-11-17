import './App.css';

// Components
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Properties from './components/properties/Properties';

// Router
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">

    <Header />

    <Switch>
      <Route exact path='/' component={Home} /> 
      <Route path='/properties' component={Properties} />
      <Route path='/contact' component={Contact} />
    </Switch>
    
    <Footer />
    </div>
  );
}

export default App;
