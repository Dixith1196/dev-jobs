import { fetchJobs, showJobs } from '../actions/jobActions'

const initialState = {
    items: [],
    item: {}
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