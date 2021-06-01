import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import  store  from '../src/library/store/store'
import Dashboard from '../src/Containers/Dashboard/dashboard'
import * as ReactBootStrap from "react-bootstrap";
import NavBar from "../src/Components/Navbar/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
// import { GlobalStyles } from './global';


// import SpecificJob from "./components/SpecificJob"

import JobInfo from "./Containers/JobInfo/JobInfo"

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }



  return (
     <Provider store={store}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
<div className="App">
<Router>
        <NavBar />
        <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/JobInfo' component={JobInfo} />
          </Switch>
      </Router>
    </div>
    </ThemeProvider>
    </Provider>
  );
}



export default App;
