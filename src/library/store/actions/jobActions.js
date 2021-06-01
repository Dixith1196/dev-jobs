import axios from "axios";

const actionType = {
    fetchJobs: 'FETCH_JOBS',
    fetchCurrentLocationJobs: 'FETCH_CURRENT_LOCATION_JOBS',
    fetchTermJobs: 'FETCH_TERM_JOBS',
    fetchGivenLocationJobs: 'FETCH_GIVEN_LOCATION_JOBS',
    fetchFullTimeJobs: 'FETCH_FULL_TIME_JOBS',
    fetchFilterJobs: 'FETCH_FILTER_JOBS',
    displayJobs: 'DISPLAY_JOBS'
}

const cors_url = "https://cors-anywhere.herokuapp.com/"

const BASE_URL = cors_url + 'https://jobs.github.com/positions.json?'

export const fetchCurrentLocationJobs = (lat, long) => dispatch => {
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