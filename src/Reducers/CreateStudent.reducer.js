
export const actionType = {

  ADD_PLAYER_REQUEST: 'ADD_PLAYER_REQUEST',
  ADD_PLAYER_SUCCESS: 'ADD_PLAYER_SUCCESS',
  ADD_PLAYER_FAILURE: 'ADD_PLAYER_FAILURE',

};



const initialState = { student: {}};

export function crudStudent(state = initialState, action) {

  switch (action.type) {
    case actionType.ADD_PLAYER_REQUEST:
      return { student: {} };
    case actionType.ADD_PLAYER_SUCCESS:
      return { student: action.student};
    case actionType.ADD_PLAYER_FAILURE:
      return { student: {} };
    default:
      return state
  }

}
