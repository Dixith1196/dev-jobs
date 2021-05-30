import { fetchJobs, showJobs } from '../actions/jobActions'

const initialState = {
    items: [],
    items: {}
}

export const jobReducer = (state=initialState, action) => {
    switch(action.type) {

      case fetchJobs:
        return {
          ...state,
          items: action.payload
        };


       default: 
       return state
    }
}