import { combineReducers } from 'redux';

//import all reducers
import todos from './todoItems'

const todoReducers = combineReducers({
	// List out all the reducers
	todos,

});
export default todoReducers