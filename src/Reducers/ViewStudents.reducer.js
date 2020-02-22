
export const actionType = {
  VIEW_ALL_PLAYERS_REQUEST: 'VIEW_ALL_PLAYERS_REQUEST',
  VIEW_ALL_PLAYERS_SUCCESS: 'VIEW_ALL_PLAYERS_SUCCESS',
  VIEW_ALL_PLAYERS_FAILURE: 'VIEW_ALL_PLAYERS_FAILURE'
};



const initialState = { students: []};

export function viewStudents(state = initialState, action) {

  switch (action.type) {
    case actionType.VIEW_ALL_PLAYERS_REQUEST:
      return { students: [] };
    case actionType.VIEW_ALL_PLAYERS_SUCCESS:
      return { students: action.students};
    case actionType.VIEW_ALL_PLAYERS_FAILURE:
      return { students: [] };
    default:
      return state
  }

}
