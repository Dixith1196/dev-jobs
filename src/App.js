import React, { useState } from 'react';
import {setLightTheme, setDarkTheme} from '../src/library/store/actions/themeActions'
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

  const theme = {
    theme: props.theme
  }
console.log(props.theme,"--theme is here--")
  return (
<div className="App">
<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
{/* <GlobalStyles /> */}
<Router>
        <NavBar />
        <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/JobInfo' component={JobInfo} />
          </Switch>
      </Router>
      </ThemeProvider>
    </div>
  );
}

const mapStateToProps = state => ({
  theme: state.themes.theme
})


export default connect(mapStateToProps, {setLightTheme, setDarkTheme})(App);
