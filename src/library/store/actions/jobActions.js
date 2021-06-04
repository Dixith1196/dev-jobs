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
    setLoader: 'SET_LODADER',
}
 const cors_url = "https://api.allorigins.win/raw?url="

 const BASE_URL = cors_url + 'https://jobs.github.com/positions.json?'

export const setLoader = () => dispatch => {
  dispatch({
    type: setLoader,
    payload: true
  })
}

export const getJobDescription = (jobId) => dispatch => {
    const JOB_BASE_URL = cors_url + `https://jobs.github.com/positions/${jobId}.json`
    axios.get(JOB_BASE_URL, {
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

export const fetchCurrentLocationJobs = (lat, long, page) => dispatch => {
    axios.get(`${BASE_URL}lat=${lat}&long=${long}&page=${page}`)
      .then(res => {
        if(res.data.length > 49){
          dispatch({
            type: fetchCurrentLocationJobs,
            lat: lat,
            long: long,
            pages: page + 1,
            payload: res.data
          })
        }else{
          dispatch({
            type: fetchCurrentLocationJobs,
            lat: lat,
            long: long,
            pages: page,
            payload: res.data
          })
        }
       
      }  
      );
}

export const fetchTermJobs = (desc, page) => dispatch => {
    axios.get(`${BASE_URL}description=${desc}&page=${page}`)
      .then(res => {
          if(res.data.length > 49){
            dispatch({
              type: fetchTermJobs,
              desc: desc,
              payload: res.data,
              pages: page + 1,
              error: res.data.error
            })
          }else{
            dispatch({
              type: fetchTermJobs,
              desc: desc,
              payload: res.data,
              pages: page,
              error: res.data.error
            })
          }
      
      }
      
      ).catch(err => {
        dispatch({
          type: fetchTermJobs,
          desc: desc,
          payload: [],
          error: err
        })
      })
}

export const fetchGivenLocationJobs = (location, page) => dispatch => {
    axios.get(`${BASE_URL}location=${location}&page=${page}`)
      .then(res => {
        if(res.data.length > 49){
        dispatch({
            type: fetchGivenLocationJobs,
            payload: res.data,
            location: location,
            pages: page + 1,
            error: res.data.error
          })
    }else{
      dispatch({
        type: fetchGivenLocationJobs,
        payload: res.data,
        location: location,
        pages: page,
        error: res.data.error
      })
    }    
  }).catch(err => {
        dispatch({
          type: fetchGivenLocationJobs,
          location: location,
          payload: [],
          error: err
        })
      })
}


export const fetchFullTimeJobs = (fullTime, page) => dispatch => {
    axios.get(`${BASE_URL}full_time=${fullTime}&page=${page}`)
      .then(res => {
        if(res.data.length > 49){
        dispatch({
            type: fetchFullTimeJobs,
            fullTime: fullTime,
            payload: res.data,
            pages: page + 1,
            error: res.data.error
          })
      }else{
        dispatch({
          type: fetchFullTimeJobs,
          fullTime: fullTime,
          payload: res.data,
          pages: page,
          error: res.data.error
        })
      }
    }
      
      ).catch(err => {
        dispatch({
          type: fetchFullTimeJobs,
          fullTime: fullTime,
          payload: [],
          error: err
        })
      })
}

export const fetchFilterJobs = (searchTerm, location, fullTime, page) => dispatch => {
    axios.get(`${BASE_URL}description=${searchTerm}&location=${location}&full_time=${fullTime}&page=${page}`)
      .then(res => {
        if(res.data.length > 49){
        dispatch({
            type: fetchFilterJobs,
            payload: res.data,
            description: searchTerm,
            pages: page + 1,
            full_time: fullTime,
            location: location,
            error: res.data.error
          })
        }else{
          dispatch({
            type: fetchFilterJobs,
            payload: res.data,
            description: searchTerm,
            pages: page,
            full_time: fullTime,
            location: location,
            error: res.data.error
          })
        }
      }
      
      ).catch(err => {
        dispatch({
          type: fetchFilterJobs,
          description: searchTerm,
          full_time: fullTime,
          location: location,
          payload: [],
          error: err
        })
      })
}


export const fetchJobs = (page) => dispatch => {
    axios.get(`${BASE_URL}page=${page}`)
      .then(res => {
        if(res.data.length > 49){
          dispatch({
            type: fetchJobs,
            payload: res.data,
            pages: page + 1,
            error: res.data.error
          })
        }else{
          dispatch({
            type: fetchJobs,
            payload: res.data,
            pages: page,
            error: res.data.error
          })
        }
       
      }
      ).catch(err => {
        dispatch({
          type: fetchJobs,
          payload: [],
          error: err
        })
      })
  };
export const displayJobs = () => ({
    type: actionType.showJobs
})