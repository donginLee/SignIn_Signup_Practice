import { combineReducers } from 'redux';
import signin from './signin';
import signup from './signup';

const rootReducer = combineReducers({
  signin,
  signup
});

export default rootReducer;