import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Home></Home> 
      <BrowserRouter>
      <Switch>
        <Route path="/">
          
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
