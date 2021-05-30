import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchJobs }  from '../../library/store/actions/jobActions';

 class Dashboard extends Component {
    // constructor(){
    //     super()
    //     // this.state={
    //     //   jobs: []
    //     // }
    // }

componentWillMount(){
    this.props.fetchJobs()
}

    render() {
        const jobItems = this.props.jobs.map(job => (
            <div key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.body}</p>
            </div>
          ));
          return (
            <div>
              <h1>Jobs</h1>
              {jobItems}
            </div>
          );


        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs.items
})


export default connect(mapStateToProps, { fetchJobs })(Dashboard);


