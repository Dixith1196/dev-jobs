import { 
  fetchJobs, 
  showJobs, 
  fetchCurrentLocationJobs, 
  fetchTermJobs, 
  fetchGivenLocationJobs, 
  fetchFullTimeJobs, 
  fetchFilterJobs,
  displayJobs } from '../actions/jobActions'

const initialState = {
    items: [],
    item: {},
    fullTime: false,
    description: "",
    location: "",
    latitude: "",
    longitude: ""
}

export const jobReducer = (state=initialState, action) => {
    switch(action.type) {
      case fetchJobs:
        return {
          ...state,
          items: action.payload
        };
        case fetchCurrentLocationJobs: 
         return {
           ...state,
           items: action.payload,
           latitude: action.lat,
           longitude: action.long
         }
         case fetchTermJobs: 
         return {
           ...state,
           items: action.payload,
           description: action.desc
         }
         case fetchGivenLocationJobs:
         return {
          ...state,
          items: action.payload,
          location: action.location
         }
         case fetchFullTimeJobs:
           return {
             ...state,
             items: action.payload,
             fullTime: action.fullTime
           }
           case fetchFilterJobs: 
           return {
             ...state,
             items: action.payload,
             description: action.description,
             fullTime: action.full_time,
             location: action.location
           }
       default: 
       return state
    }
}