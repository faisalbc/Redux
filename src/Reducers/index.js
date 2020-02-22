import { crudStudent } from './CreateStudent.reducer.js';
import { viewStudents } from './ViewStudents.reducer.js'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  crudStudent,
  viewStudents
});

export default rootReducer;
