import { combineReducers } from 'redux';
import { todoReducer as todo } from '../todos';

const rootReducer = combineReducers({
  todo
});

export default rootReducer;
