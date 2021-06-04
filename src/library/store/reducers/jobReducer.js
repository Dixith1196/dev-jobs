import { 
  fetchJobs, 
  fetchCurrentLocationJobs, 
  fetchTermJobs, 
  fetchGivenLocationJobs, 
  fetchFullTimeJobs, 
  fetchFilterJobs,
  getJobDescription,
  setLoader,
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
    currentPage: 0,
    pageCount: 50,
    pages: 1,
}

export const jobReducer = (state=initialState, action) =>
 {
  console.log(action.payload,"---payload is here---")
  console.log(action.pages,"----action pages are here----")
    switch(action.type) {
    
     case setLoader:
       return{
         ...state,
         loading: true
       }
      case fetchJobs:
        return {
          ...state,
          items: action.payload,
          loading: false,
          pages: action.pages,
          error: action.error
        };
        case fetchCurrentLocationJobs: 
         return {
           ...state,
           items: action.payload,
           loading: false,
           pages: action.pages,
           latitude: action.lat,
           longitude: action.long,
           error: action.error
         }
         case fetchTermJobs: 
         return {
           ...state,
           items: action.payload,
           loading: false,
           pages: action.pages,
           description: action.desc,
           error: action.error
         }
         case fetchGivenLocationJobs:
         return {
          ...state,
          items: action.payload,
          loading: false,
          pages: action.pages,
          location: action.location,
          error: action.error
         }
         case fetchFullTimeJobs:
           return {
             ...state,
             items: action.payload,
             loading: false,
             pages: action.pages,
             fullTime: action.fullTime,
             error: action.error
           }
           case fetchFilterJobs: 
           return {
             ...state,
             items: action.payload,
             loading: false,
             pages: action.pages,
             description: action.description,
             fullTime: action.full_time,
             location: action.location,
             error: action.error
           }
           case getJobDescription: 
           return {
             ...state,
             item: action.payload,
             loading: false,
             error: action.error
           }
       default: 
       return state
    }
}