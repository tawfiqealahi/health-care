import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import './App.css';
import Gallery from './Components/Gallery/Gallery';
import HomePage from './Components/HomePage/HomePage';
import Services from './Components/Services/Services';
import Faq from './Components/Faq/Faq';
import AboutUs from './Components/AboutUs/AboutUs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import ServicesDetails from './Components/HomePage/ServicesDetails/ServicesDetails';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    
    
    
    <AuthProvider>
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
        <Route exact path="/servicedetails/:id">
        <ServicesDetails></ServicesDetails>

        </Route>

        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route  path="*">
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    
    
  );
}

export default App;
