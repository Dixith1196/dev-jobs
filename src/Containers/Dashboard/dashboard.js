import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { fetchJobs, fetchCurrentLocationJobs, fetchTermJobs, fetchGivenLocationJobs, fetchFullTimeJobs , fetchFilterJobs}  from '../../library/store/actions/jobActions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./dashboard.css"
import { Container } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar"

import Search from '../../Components/Search/Search'

 function Dashboard(props) {

  const [mounted, setMounted] = useState(false)
 

  if(!mounted){
    // Code for componentWillMount here
    // This code is called only one time before intial render
   

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

    if(!position.coords.latitude && !position.coords.longitude){
      console.log("Current location is disabled")
    }else{
       props.fetchTermJobs("Java")
      // props.fetchCurrentLocationJobs(position.coords.latitude, position.coords.longitude) 
    }
    });

  }

  useEffect(() =>{
    setMounted(true)
  },[])
  
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
          <Container  style={{padding: "7%"}}>
            {/* <Search /> */}
          <Grid container spacing={4} direction="row" justify="flex-start" alignItems="flex-start">
          {props.jobs.map((job) => (
                  <Grid item xs={12} sm={6} md={4} key={props.jobs.id}>
                      <Card className={classes.root}>
                      <CardContent>
                          <Avatar style={{backgroundColor: generateRandomColor()}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                          {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                          {user.id}
                          </Typography> */}
                          <Typography noWrap numberOfLines={1} ellipsizeMode='tail' variant="h5" component="h2">
                          {job.company}
                          </Typography>
                          <Typography noWrap  numberOfLines={1} ellipsizeMode='tail' className={classes.pos} color="textSecondary">
                          {job.location}
                          </Typography>
                          <Typography noWrap numberOfLines={1}  variant="body2" component="p">
                          {job.type}
                          <br />
                          {'"a benevolent smile"'}
                          </Typography>
                      </CardContent>
                  </Card>
                  </Grid>
                          ))};
          </Grid>
      </Container>
        )
    }

const mapStateToProps = state => ({
    jobs: state.jobs.items
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
  },
  root: {
      // flexGrow: 1,
    },
});


export default connect(mapStateToProps, { fetchJobs, fetchCurrentLocationJobs, fetchTermJobs, fetchGivenLocationJobs, fetchFullTimeJobs,
  fetchFilterJobs
})(Dashboard);


