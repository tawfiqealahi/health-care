import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import './App.css';
import Gallery from './Components/Gallery/Gallery';
import HomePage from './Components/HomePage/HomePage';
import Services from './Components/Services/Services';
import Faq from './Components/Faq/Faq';
import Navbar from './Components/Header/Navbar/Navbar';
import AboutUs from './Components/AboutUs/AboutUs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Banner from './Components/Header/Banner/Banner';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="a">
      
      <BrowserRouter>
      
      
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
       
        <Route exact path="/home">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/gallery">
        <Gallery></Gallery>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/faq">
          <Faq></Faq>
        </Route>
        <Route exact path="/aboutus">
          <AboutUs></AboutUs>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route  path="*">
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
