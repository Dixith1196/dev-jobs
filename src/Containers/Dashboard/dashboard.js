import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { fetchJobs }  from '../../library/store/actions/jobActions';
import axios from "axios"

 class Dashboard extends Component {
    
componentWillMount(){
    this.props.fetchJobs()
}

    render() {
        const jobItems = this.props.jobs.map(job => (
          <Container style={{}}>
          <Grid container spacing={4} direction="row" justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card className={classes.root} >
                      <CardContent>
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                          {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                          {user.id}
                          </Typography> */}
                          <Typography variant="h5" component="h2">
                          {job.company}
                          </Typography>
                          <Typography className={classes.pos} color="textSecondary">
                          {job.location}
                          </Typography>
                          <Typography variant="body2" component="p">
                          {job.type}
                          <br />
                          {'"a benevolent smile"'}
                          </Typography>
                      </CardContent>
                  </Card>
                  </Grid>
          </Grid>
      </Container>
          ));
          return (
            <div>
              <h1>Jobs</h1>
              {jobItems}
            </div>
          );
    }
}

Dashboard.propTypes = {
    fetchJobs: PropTypes.func.isRequired,
    jobs: PropTypes.array.isRequired,
    // newPost: PropTypes.object
  };

const mapStateToProps = state => ({
    jobs: state.jobs.items
})


export default connect(mapStateToProps, { fetchJobs })(Dashboard);


