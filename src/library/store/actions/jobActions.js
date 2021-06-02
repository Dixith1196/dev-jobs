import axios from "axios";

const actionType = {
    fetchJobs: 'FETCH_JOBS',
    fetchCurrentLocationJobs: 'FETCH_CURRENT_LOCATION_JOBS',
    fetchTermJobs: 'FETCH_TERM_JOBS',
    fetchGivenLocationJobs: 'FETCH_GIVEN_LOCATION_JOBS',
    fetchFullTimeJobs: 'FETCH_FULL_TIME_JOBS',
    fetchFilterJobs: 'FETCH_FILTER_JOBS',
    displayJobs: 'DISPLAY_JOBS',
    getJobDescription: 'GET_JOB_DESCRIPTION'
}

// const cors_url = "https://cors-anywhere.herokuapp.com/"

const cors_url = "https://api.allorigins.win/raw?url="

const BASE_URL = cors_url + `https://jobs.github.com/positions.json`


export const getJobDescription = (jobId) => dispatch => {
    console.log(jobId,"---job desc is called---")
    const JOB_BASE_URL = cors_url + `https://jobs.github.com/positions/${jobId}.json`
    const cancelToken1 = axios.CancelToken.source()

    axios.get(JOB_BASE_URL, {
        cancelToken: cancelToken1.token,
        params: {
            markdown: true
     },   
    })
      .then(res => {
          console.log(res,"--job desc res is here--")
        dispatch({
            type: getJobDescription,
            payload: res.data
          })
      }
      );
}

export const fetchCurrentLocationJobs = (lat, long) => dispatch => {
    console.log("---current location is called---")
    const cancelToken1 = axios.CancelToken.source()
    axios.get(BASE_URL, {
        cancelToken: cancelToken1.token,
        params: { 
            markdown: true, 
            lat: lat,
            long: long
         }
      })
      .then(res => {
          console.log(res,"--res is here---")
        dispatch({
            type: fetchCurrentLocationJobs,
            lat: lat,
            long: long,
            payload: res.data
          })
      }
      
      );
}

export const fetchTermJobs = (desc) => dispatch => {
    console.log("---current term is called---")
    const cancelToken1 = axios.CancelToken.source()
    
    axios.get(BASE_URL, {
        cancelToken: cancelToken1.token,
        params: { 
            markdown: true,
            description: desc
        }
      })
      .then(res => {
          console.log(res,"--res is here---")
        dispatch({
            type: fetchTermJobs,
            desc: desc,
            payload: res.data
          })
      }
      
      );
}

export const fetchGivenLocationJobs = (location) => dispatch => {
    console.log("---current given loc is called---")
    const cancelToken1 = axios.CancelToken.source()
    axios.get(BASE_URL, {
        cancelToken: cancelToken1.token,
        params: { 
            markdown: true,
            location: location
         }
      })
      .then(res => {
          console.log(res,"--res is here---")
        dispatch({
            type: fetchGivenLocationJobs,
            payload: res.data,
            location: location
          })
      }
      
      );
}


export const fetchFullTimeJobs = (fullTime) => dispatch => {
    console.log("---current fulltime is called---")
    const cancelToken1 = axios.CancelToken.source()
    axios.get(BASE_URL, {
        cancelToken: cancelToken1.token,
        params: { 
            markdown: true,
            full_time: fullTime
         }
      })
      .then(res => {
          console.log(res,"--res is here---")
        dispatch({
            type: fetchFullTimeJobs,
            fullTime: fullTime,
            payload: res.data
          })
      }
      
      );
}

export const fetchFilterJobs = (searchTerm, location, fullTime) => dispatch => {
    console.log("---current filter is called---")
    const cancelToken1 = axios.CancelToken.source()
    axios.get(BASE_URL, {
        cancelToken: cancelToken1.token,
        params: { 
            markdown: true,
            description: searchTerm,
            full_time: fullTime,
            location: location
         }
      })
      .then(res => {
          console.log(res,"--res is here---")
        dispatch({
            type: fetchFilterJobs,
            payload: res.data,
            description: searchTerm,
            full_time: fullTime,
            location: location
          })
      }
      
      );
}


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