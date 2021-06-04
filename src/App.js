import React  from 'react';
import {setLightTheme, setDarkTheme, toggleTheme} from '../src/library/store/actions/themeActions'
import { connect } from 'react-redux'
import './App.css';
import Dashboard from '../src/Containers/Dashboard/dashboard'
import NavBar from "../src/Components/Navbar/Navbar"
import {HashRouter as Router, Switch, Route} from "react-router-dom"

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import JobInfo from "./Containers/JobInfo/JobInfo"

function App(props) {

  return (
<div className="App">
<ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>
<GlobalStyles />
<Router>
        {/* <NavBar /> */}
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
