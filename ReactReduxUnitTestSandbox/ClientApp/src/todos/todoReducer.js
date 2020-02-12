import * as types from './actionTypes';

const initialState = { items: [], loading: true, error: false };

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_TODOS_SUCCESS:
      return {
        ...state,
        items: action.todos,
        loading: false,
        error: false
      };
    case types.LOAD_TODOS_FAILED:
      return {
        ...state,
        items: [],
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
