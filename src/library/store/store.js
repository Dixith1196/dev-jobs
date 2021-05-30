import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { jobReducer } from './reducers/jobReducer'


const initalState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
    jobs: jobReducer
});

const store = createStore(rootReducer, initalState, applyMiddleware(...middleware));

export default store;
export const dispatchAction = action => store.dispatch(action);
