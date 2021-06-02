import axios from "axios";

const actionType = {
    fetchJobs: 'FETCH_JOBS',
    fetchCurrentLocationJobs: 'FETCH_CURRENT_LOCATION_JOBS',
    fetchTermJobs: 'FETCH_TERM_JOBS',
    fetchGivenLocationJobs: 'FETCH_GIVEN_LOCATION_JOBS',
    fetchFullTimeJobs: 'FETCH_FULL_TIME_JOBS',
    fetchFilterJobs: 'FETCH_FILTER_JOBS',
    displayJobs: 'DISPLAY_JOBS',
    getJobDescription: 'GET_JOB_DESCRIPTION',
    setPage: 'SET_PAGE'
}

 const cors_url = "https://cors-anywhere.herokuapp.com/"

// const cors_url = "https://api.allorigins.win/raw?url="

const BASE_URL = cors_url + 'https://jobs.github.com/positions.json?'

// const cors_url = "https://cors-anywhere.herokuapp.com/"

// const BASE_URL = cors_url + 'https://jobs.github.com/positions.json?'


export const getJobDescription = (jobId) => dispatch => {
    const JOB_BASE_URL = cors_url + `https://jobs.github.com/positions/${jobId}.json`
    const cancelToken1 = axios.CancelToken.source()

    axios.get(JOB_BASE_URL, {
        cancelToken: cancelToken1.token,
        params: {
            markdown: true
     },   
    })
      .then(res => {
        dispatch({
            type: getJobDescription,
            payload: res.data
          })
      }
      );
}

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
          console.log(res, "---response is here---")
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
    axios.get(`${BASE_URL}location=${location}`, {
        cancelToken: cancelToken1.token,
      })
      .then(res => {
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
    axios.get(`${BASE_URL}full_time=${fullTime}`, {
        cancelToken: cancelToken1.token,
        // params: { 
        //     markdown: true,
        //     full_time: fullTime
        //  }
      })
      .then(res => {
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
    axios.get(`${BASE_URL}description=${searchTerm}location=${location}full_time=${fullTime}`, {
        cancelToken: cancelToken1.token,
        // params: { 
        //     markdown: true,
        //     description: searchTerm,
        //     full_time: fullTime,
        //     location: location
        //  }
      })
      .then(res => {
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


export const fetchJobs = (page) => dispatch => {
    const cancelToken1 = axios.CancelToken.source()
    axios.get(BASE_URL, {
        cancelToken: cancelToken1.token,
        params: { markdown: true, page: 2 }
      })
      .then(res => {
        dispatch({
            type: fetchJobs,
            page: page,
            payload: res.data
          })
      }
      
      );
  };

  export const setPage = (page) => dispatch => {
     dispatch({
      type: setPage,
      payload: page,
     })
  }

export const displayJobs = () => ({
    type: actionType.showJobs
})