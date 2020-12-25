import './App.css';


// Components
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import FeaturedListings from './components/featured-listings/FeaturedListings';
import Sold from './components/sold/Sold';

// Pages
import AboutPage from './pages/about/AboutPage'

// Router
import { Route, Switch } from 'react-router-dom';

function App() {
  // console.log(SliderData);
  return (
    <div className="app">

    <Header />

    <Switch>
      <Route exact path='/' component={Home} /> 
      <Route path='/about' component={AboutPage} />
      <Route path='/featured-listings' component={FeaturedListings} />
      <Route path='/contact' component={Contact} />
      <Route path='/sold' component={Sold} />
    </Switch>
    
    <Footer />
    </div>
  );
}

export default App;
