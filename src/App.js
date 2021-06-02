import React, { useState, useEffect } from 'react';
import {setLightTheme, setDarkTheme, toggleTheme} from '../src/library/store/actions/themeActions'
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Dashboard from '../src/Containers/Dashboard/dashboard'
import * as ReactBootStrap from "react-bootstrap";
import NavBar from "../src/Components/Navbar/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import JobInfo from "./Containers/JobInfo/JobInfo"

function App(props) {

   const [mounted, setMounted] = useState(false)


  if(!mounted){
    if( localStorage.getItem("toggle") == true){
      props.toggleTheme(true)
    }else{
      props.toggleTheme(false)
    }
  }

  useEffect(() =>{
     setMounted(true)
  },[])


  // if( localStorage.getItem("toggle") == false){
  //   props.toggleTheme(true)
  // }else{
  //   props.toggleTheme(false)
  // }
  
  return (
<div className="App">
<ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>
<GlobalStyles />
<Router>
        <NavBar />
        <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/JobInfo/:id' component={JobInfo} />
          </Switch>
      </Router>
      </ThemeProvider>
    </div>
  );
}

const mapStateToProps = state => ({
  theme: state.themes.theme
})


export default connect(mapStateToProps, {setLightTheme, setDarkTheme, toggleTheme})(App);
