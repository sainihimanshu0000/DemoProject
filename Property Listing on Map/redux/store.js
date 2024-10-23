import { createStore } from 'redux';
import { combineReducers } from 'redux';
import Reducer from './reducer';

const rootReducer = combineReducers({
    filter: Reducer,
    // Add other reducers here
});

const store = createStore(rootReducer);

export default store;
