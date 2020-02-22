
import {services} from '../Services/Services.js';


export const actionType = {

    ADD_PLAYER_REQUEST: 'ADD_PLAYER_REQUEST',
    ADD_PLAYER_SUCCESS: 'ADD_PLAYER_SUCCESS',
    ADD_PLAYER_FAILURE: 'ADD_PLAYER_FAILURE',
    VIEW_ALL_PLAYERS_REQUEST: 'VIEW_ALL_PLAYERS_REQUEST',
    VIEW_ALL_PLAYERS_SUCCESS: 'VIEW_ALL_PLAYERS_SUCCESS',
    VIEW_ALL_PLAYERS_FAILURE: 'VIEW_ALL_PLAYERS_FAILURE'
};


export const allActions = {
    addStudent,
    viewStudents
};

function addStudent(student) {
  return dispatch => {
      dispatch(request(student));
      services.addStudent(student);
      dispatch(success(student));
  };
  function request(student) { return { type: actionType.ADD_PLAYER_REQUEST, student } }
  function success(student) { return { type: actionType.ADD_PLAYER_SUCCESS, student } }
  function failure(error) { return { type: actionType.ADD_PLAYER_FAILURE, error } }
}

function viewStudents() {
  return dispatch => {
      dispatch(request());
      let students = services.viewStudents();
      dispatch(success(students));
  };
  function request() { return { type: actionType.VIEW_ALL_PLAYERS_REQUEST } }
  function success(students) { return { type: actionType.VIEW_ALL_PLAYERS_SUCCESS, students } }
  function failure(error) { return { type: actionType.VIEW_ALL_PLAYERS_FAILURE, error } }
}
