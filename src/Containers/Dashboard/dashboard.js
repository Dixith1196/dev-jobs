import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import { useHistory } from "react-router-dom";
import { fetchJobs, fetchCurrentLocationJobs, fetchTermJobs, fetchGivenLocationJobs, fetchFullTimeJobs , fetchFilterJobs}  from '../../library/store/actions/jobActions';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import "./dashboard.css"
// import { Container } from 'react-bootstrap';
// import Grid from '@material-ui/core/Grid';
// import Avatar from "@material-ui/core/Avatar"
// import createDOMPurify from 'dompurify'
// import { JSDOM } from 'jsdom'

// import { Pagination } from 'react-bootstrap'

import Search from '../../Components/Search/Search'

 function Dashboard(props) {


  // let history = useHistory();
  const [mounted, setMounted] = useState(false)
 
  // const window = (new JSDOM('')).window
  // const DOMPurify = createDOMPurify(window)

  if(!mounted){
    // Code for componentWillMount here
    // This code is called only one time before intial render
   

    navigator.geolocation.getCurrentPosition(function(position) {
    if(!position.coords.latitude && !position.coords.longitude){
    }else{
      console.log(props.fetchJobs(), "---error is here---")  
       
      // props.fetchCurrentLocationJobs(position.coords.latitude, position.coords.longitude) 
    }
    });
  }

  useEffect(() =>{
    setMounted(true)
  },[])

  

  // const goToJob = (id) => {
  //   history.push(`/JobInfo/${id}`)
  // }
  
  // function generateRandomColor() {
  //   var letters = '0123456789ABCDEF';
  //   var color = '#';
  //   for (var i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }
  
  // const classes = useStyles();
        return(
          <div>
           {/* <NavBar />  */}
          <Search style={{position: "relative", zIndex: 10}} />
          <div  style={{padding: "7%"}}>
          {/* <Typography  variant="body2"  component="p" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.fetchJobs()) }}/> */}
            {/*  <Grid container spacing={4} direction="row" justify="flex-start" alignItems="flex-start">
          {props.jobs.map((job) => (
                  <Grid item xs={12} sm={6} md={4} key={job.id}>
                      <Card onClick={() => goToJob(job.id)} className={classes.root}>
                      <CardContent>
                          <Avatar style={{backgroundColor: generateRandomColor()}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                       <Typography className={classes.title} color="textSecondary" gutterBottom>
                          {user.id}
                          </Typography> 
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
          </Grid>*/}
          <p>{props.error}</p>
      </div>
      </div>
        )
    }

const mapStateToProps = state => ({
    jobs: state.jobs.items,
    error: state.jobs.error
})


// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   }
//   ,
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//     borderRadius:"10%",
//     flex:"1"
//   },
//   pos: {
//     marginBottom: 12,
//   }
// });


export default connect(mapStateToProps, { fetchJobs, fetchCurrentLocationJobs, fetchTermJobs, fetchGivenLocationJobs, fetchFullTimeJobs,
  fetchFilterJobs
})(Dashboard);


