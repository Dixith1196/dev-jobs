const actionType = {
    fetchJobs: 'FETCH_JOBS',
    displayJobs: 'DISPLAY_JOBS'
}

// export const fetchJobs = () => dispatch => {
//     console.log(jobsData,"---data is here---")
//     fetch('https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         // body: JSON.stringify(jobs)
//     })
//     .then(res => {res.json(), console.log(res, "--response is here--")})
//     .then(jobs => dispatch({
//         type: fetchJobs,
//         payload: jobs
//     }))
//     // .then(data => console.log(data,"---data is here---"))
//     .catch(err => console.log(err,"--error is here--"))

// }


export const fetchJobs = () => dispatch => {
    fetch('https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823')
      .then(res => res.json())
      .then(jobs =>
        dispatch({
          type: fetchJobs,
          payload: jobs
        })
      );
  };

export const displayJobs = () => ({
    type: actionType.showJobs
})