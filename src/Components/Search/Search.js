import React, { useState } from 'react'
import './Search.css'

import { connect } from 'react-redux'
import { fetchJobs, fetchCurrentLocationJobs, fetchTermJobs, fetchGivenLocationJobs, fetchFullTimeJobs , fetchFilterJobs}  from '../../library/store/actions/jobActions';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input"
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button"

 function Search(props) {
  
  const [query, setQuery] = useState("")
  const [location, setLocation] = useState("")
  const [checked, setChecked] = useState(false)

 const handleInputChange = event => {
    setQuery(event.target.value)
};

  const handleLocationInputChange = event => {
    setLocation(event.target.value)
    };

    const handleCheck  = () => {
      setChecked(!checked)
    }


    const filterResults = () => {
      console.log("filter results")
      if(query != "" && location == "" && checked == false){
        props.fetchTermJobs(query)
      }else if(query == "" && location != "" && checked == false){
        props.fetchGivenLocationJobs(location)
      }else if(query == "" && location == "" && checked == true){
        props.fetchFullTimeJobs(checked)
      }else if(query != "" && location != ""){
        props.fetchFilterJobs(query, location, false)
      }else if(location != "" && checked == true){
        props.fetchFilterJobs("", location, checked)
      }else if(query != "" && checked == true){
        props.fetchFilterJobs(query,"", checked)
      }
      else if(query != "" && location != "" && checked == true){
        props.fetchFilterJobs(query, location, checked)
      }else{
        props.fetchCurrentLocationJobs(props.latitude, props.longitude) 
      }
    }

    return (
        // <div>
             <div className="down-content">
            <Input
            placeholder="Filter by title, companies, expertise..."
          id="input-with-icon-adornment"
          className="TextField-filter"
          value={query}
          onChange={handleInputChange}

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
         
          value={location}
          onChange={handleLocationInputChange}


          startAdornment={
            <InputAdornment position="start">
              <LocationOnIcon color="primary" />
            </InputAdornment>
          }
        />
        <FormControlLabel className="check-input"
        control={
          <Checkbox
          checked={checked}
          onChange={handleCheck}
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Full Time Only"
        
      />
      <Button onClick={filterResults} className="search-button" variant="contained" color="primary">
  Search
</Button>
        </div>
        // </div>
    )
}

const mapStateToProps = state => ({
  jobs: state.jobs.items
})

export default connect(mapStateToProps, { fetchJobs, fetchCurrentLocationJobs, fetchTermJobs, fetchGivenLocationJobs, fetchFullTimeJobs,
  fetchFilterJobs
})(Search);