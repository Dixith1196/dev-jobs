import React, { useState , useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { connect } from 'react-redux'
import { setLightTheme, setDarkTheme, toggleTheme } from '../../library/store/actions/themeActions'
 import Search from '../Search/Search'
import Switch from "react-switch";
import IconButton from "@material-ui/core/IconButton";

// import SearchIcon from "@material-ui/icons/Search";

import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { Container } from "@material-ui/core";

function NavBar(props) {
 
  const [toggle, setToggle]=useState(false);

  const [mounted, setMounted] = useState(false)


  // if(!mounted){
  //   // Code for componentWillMount here
  //   // This code is called only one time before intial render
  //   if(props.toggle == false){
  //     setToggle(false)
  //   }else{
  //     setToggle(true)
  //   }
   
  // }

  useEffect(() =>{
    setMounted(true)
  },[])


  console.log(props,"---toggle is here1")

  const handleClick = () => {
   
    // setToggle(!toggle);
    if(props.toggle == false){
      props.toggleTheme(true)
      props.setDarkTheme()
    }else{
      props.toggleTheme(false)
      props.setLightTheme()
    }
    console.log(props,"---toggle is here2")
  }

  React.useEffect(() => {
    if (toggle == false) {
     props.setLightTheme()
    } else {
      props.setDarkTheme()
    }
  }, [toggle]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            devjobs
            {/* <i className="fas fa-code"></i> */}
          </NavLink>
          <div style={{paddingRight:"10px"}}>
          <WbSunnyIcon style={{ color: "white"}}/>
          </div>
          
          <Switch
            checked={props.toggle}
            onChange={handleClick}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
          <Brightness3Icon style={{ color: "white"}}/>
        </div>
       {/* <Search /> */}
      </nav>
    </>
  );
}

const mapStateToProps = state => ({
  theme: state.themes.theme,
  toggle: state.themes.toggle
})


export default connect(mapStateToProps, {setLightTheme, setDarkTheme, toggleTheme})(NavBar);