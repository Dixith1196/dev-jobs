import React, { useState } from 'react'
import NavBar from '../../Components/Navbar/Navbar'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { fetchJobs, fetchCurrentLocationJobs, fetchTermJobs, fetchGivenLocationJobs, fetchFullTimeJobs , fetchFilterJobs, setLoader}  from '../../library/store/actions/jobActions';
import { Card, CardContent, Typography, Grid, Avatar, makeStyles, CircularProgress } from '@material-ui/core';
import "./dashboard.css"
import Search from '../../Components/Search/Search'
import Pagination from '@material-ui/lab/Pagination';

 function Dashboard(props) {

  let history = useHistory();
  const [mounted, setMounted] = useState(false)

 
  if(!mounted){
     props.setLoader() 
     props.fetchJobs(1)
  
    navigator.geolocation.getCurrentPosition(function(position) {
    if(!position.coords.latitude && !position.coords.longitude){
    }else{
      // console.log(props.fetchJobs(), "---error is here---")  
      // props.fetchCurrentLocationJobs(position.coords.latitude, position.coords.longitude) 
    }
    });
  }

  useEffect(() =>{
    setMounted(true)
  },[])


   const goToJob = (id) => {
     history.push(`/JobInfo/${id}`)
   }

   const handlePageChange = (e, page) => {
       props.fetchJobs(page)
   }
  
  function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
 const classes = useStyles();
        return(
          <div>
           <NavBar /> 
          <Search style={{position: "relative", zIndex: 10}} />
          <div  style={{padding: "7%"}}>
          {props.loading && <CircularProgress style={{display: "flex", margin: "0 auto"}} />}
          {props.jobs.length === 0 && <h3 style={{textAlign: "center"}}>No Jobs Available for this Search</h3>}
           <Typography  variant="body2"  component="p" /> 
              <Grid container spacing={4} direction="row" justify="flex-start" alignItems="flex-start">
          {props.jobs.map((job) => (
                  <Grid item xs={12} sm={6} md={4} key={job.id}>
                      <Card onClick={() => goToJob(job.id)} className={classes.root}>
                      <CardContent>
                          <Avatar style={{backgroundColor: generateRandomColor()}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                       {/*<Typography className={classes.title} color="textSecondary" gutterBottom>
                          {user.id}
          </Typography> */}
                          <Typography noWrap  variant="h5" component="h2">
                          {job.company}
                          </Typography>
                          <Typography noWrap    className={classes.pos} color="textSecondary">
                          {job.location}
                          </Typography>
                          <Typography noWrap   variant="body2" component="p">
                          {job.type}
                          <br />
                          {'"a benevolent smile"'}
                          </Typography>
                      </CardContent>
                  </Card>
                  </Grid>
                          ))}
          </Grid>
          <p>{props.error}</p>
          <div style={{display: "flex", justifyContent: "center"}}>
      {props.jobs.length > 0 && props.pages > 0 && <Pagination  onChange={handlePageChange} count={props.pages} color="primary" />}
      </div>
      </div>
      </div>
        )
    }

const mapStateToProps = state => ({
    jobs: state.jobs.items,
    error: state.jobs.error,
    loading: state.jobs.loading,
    pageCount: state.jobs.pageCount,
    pages: state.jobs.pages,
    currentPage: state.jobs.currentPage
})


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
  ,
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    borderRadius:"10%",
    flex:"1"
  },
  pos: {
    marginBottom: 12,
  }
});


export default connect(mapStateToProps, { fetchJobs, fetchCurrentLocationJobs, fetchTermJobs, fetchGivenLocationJobs, fetchFullTimeJobs,
  fetchFilterJobs, setLoader
})(Dashboard);


