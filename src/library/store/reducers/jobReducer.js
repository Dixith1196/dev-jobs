import { 
  fetchJobs, 
  fetchCurrentLocationJobs, 
  fetchTermJobs, 
  fetchGivenLocationJobs, 
  fetchFullTimeJobs, 
  fetchFilterJobs,
  getJobDescription,
  setPage
} from '../actions/jobActions'

const initialState = {
    items: [],
    item: {},
    loading: false,
    fullTime: false,
    description: "",
    location: "",
    latitude: "",
    longitude: "",

    page: 0,
    hasNextPage: false
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
           case getJobDescription: 
           return {
             ...state,
             item: action.payload
           }
           case setPage:
             return{
               ...state,
               page: action.payload
             }
       default: 
       return state
    }
}