import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Switch from "react-switch";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input"
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button"
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { Container } from "@material-ui/core";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
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
            // checked={this.state.checked}
            // onChange={this.handleChange}
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
        <div className="down-content">
            <Input
            placeholder="Filter by title, companies, expertise..."
          id="input-with-icon-adornment"
          className="TextField-filter"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          }
        />
            <Input
            placeholder="Filter bu location..."
          id="input-with-icon-adornment"
          className="TextField-loc"
          startAdornment={
            <InputAdornment position="start">
              <LocationOnIcon color="primary" />
            </InputAdornment>
          }
        />
        <FormControlLabel className="check-input"
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Full Time Only"
        
      />
      <Button className="search-button" variant="contained" color="primary">
  Search
</Button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;