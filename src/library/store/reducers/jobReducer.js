import { 
  fetchJobs, 
  fetchCurrentLocationJobs, 
  fetchTermJobs, 
  fetchGivenLocationJobs, 
  fetchFullTimeJobs, 
  fetchFilterJobs,
  getJobDescription
} from '../actions/jobActions'

const initialState = {
    items: [],
    error: "",
    response: "",
    item: {},
    loading: false,
    fullTime: false,
    description: "",
    location: "",
    latitude: "",
    longitude: "",
}

export const jobReducer = (state=initialState, action) => {
  console.log(action.payload,"---payload is here---")
    switch(action.type) {
      case fetchJobs:
        return {
          ...state,
          response: action.payload,
          items: [],
          error: action.error
        };
        case fetchCurrentLocationJobs: 
         return {
           ...state,
           items: action.payload,
           latitude: action.lat,
           longitude: action.long,
           error: action.error
         }
         case fetchTermJobs: 
         return {
           ...state,
           items: action.payload,
           description: action.desc,
           error: action.error
         }
         case fetchGivenLocationJobs:
         return {
          ...state,
          items: action.payload,
          location: action.location,
          error: action.error
         }
         case fetchFullTimeJobs:
           return {
             ...state,
             items: action.payload,
             fullTime: action.fullTime,
             error: action.error
           }
           case fetchFilterJobs: 
           return {
             ...state,
             items: action.payload,
             description: action.description,
             fullTime: action.full_time,
             location: action.location,
             error: action.error
           }
           case getJobDescription: 
           return {
             ...state,
             item: action.payload,
             error: action.error
           }
       default: 
       return state
    }
}