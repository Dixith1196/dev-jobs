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
            <div key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.type}</p>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
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


