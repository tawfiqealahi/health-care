import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import AllProducts from "./components/AllProducts/AllProducts";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Order from "./components/Order/Order";
import AboutUs from "./components/AboutUs/AboutUs";
import Faq from "./components/Faq/Faq";
import Gallery from "./components/Gallery/Gallery";
import FaqShort from "./components/FaqShort/FaqShort";
import Banner from "./components/Banner/Banner";
import DoctorsTeam from "./components/DoctorsTeam/DoctorsTeam";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/banner">
            <Banner></Banner>
          </Route>
          
          <PrivateRoute path="/allProducts">
            <AllProducts></AllProducts>
          </PrivateRoute>
          <PrivateRoute path="/products/:id">
            <Order></Order>
          </PrivateRoute>
         <Route path="/about">
           <AboutUs></AboutUs>
         </Route>
         <Route path="/doctorsTeam">
           <DoctorsTeam></DoctorsTeam>
         </Route>
         <PrivateRoute path="/gallery">
           <Gallery></Gallery>
         </PrivateRoute>
         <Route path="/faq">
           <Faq></Faq>
         </Route>
         <Route path="/faqShort">
           <FaqShort></FaqShort>
         </Route>
          <Route path="/logIn">
            <LogIn></LogIn>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;


