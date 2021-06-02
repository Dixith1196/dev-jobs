import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { jobReducer } from './reducers/jobReducer'
import { themeReducer } from './reducers/themeReducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const initalState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
    jobs: jobReducer,
    themes: themeReducer
});

const persistConfig = {
    key: 'themeReducer',
    storage: storage,
    whitelist: [themeReducer] // which reducer want to store
  };
  const pReducer = persistReducer(persistConfig, rootReducer);

  
const store = createStore(pReducer, initalState, applyMiddleware(...middleware));


export const persistor = persistStore(store);
export default store;
export const dispatchAction = action => store.dispatch(action);

