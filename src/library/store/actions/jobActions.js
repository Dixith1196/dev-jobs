import axios from "axios";

const actionType = {
    fetchJobs: 'FETCH_JOBS',
    displayJobs: 'DISPLAY_JOBS'
}

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823'

export const fetchJobs = () => dispatch => {
    const cancelToken1 = axios.CancelToken.source()
    axios.get(BASE_URL, {
        cancelToken: cancelToken1.token,
        params: { markdown: true }
      })
      .then(res => {
          console.log(res,"--res is here---")
        dispatch({
            type: fetchJobs,
            payload: res.data
          })
      }
      
      );
  };


export const displayJobs = () => ({
    type: actionType.showJobs
})