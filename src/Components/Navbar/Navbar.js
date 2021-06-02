import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { connect } from 'react-redux'
import { setLightTheme, setDarkTheme, toggleTheme } from '../../library/store/actions/themeActions'
import Switch from "react-switch";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

function NavBar(props) {

  // const [mounted, setMounted] = useState(false)
 
  const handleClick = () => {
    if(props.toggle === false){
      props.toggleTheme(true)
      localStorage.setItem("toggle", true)
      localStorage.setItem("theme", "dark")
    }else{
      props.toggleTheme(false)
      localStorage.setItem("toggle", false)
      localStorage.setItem("theme", "light")
    }
  }

  // if(!mounted){
  //   if( localStorage.getItem("toggle") == true){
  //     props.toggleTheme(true)
  //   }else{
  //     props.toggleTheme(false)
  //   }
  // }

  // useEffect(() =>{
  //   // setMounted(true)
  //   console.log("--use effect calls--")
  //   if( localStorage.getItem("toggle") == true){
  //     props.toggleTheme(true)
  //   }else{
  //     props.toggleTheme(false)
  //   }
  // },[])

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