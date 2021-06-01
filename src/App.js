import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import  store  from '../src/library/store/store'
import Dashboard from '../src/Containers/Dashboard/dashboard'
import * as ReactBootStrap from "react-bootstrap";
import NavBar from "../src/Components/Navbar/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
// import SpecificJob from "./components/SpecificJob"

function App() {
  return (
     <Provider store={store}>
<div className="App">
<Router>
        <NavBar />
        <Switch>
              <Route exact path='/' component={Dashboard} />
          </Switch>
      </Router>
    </div>
    </Provider>
  );
}



export default App;
