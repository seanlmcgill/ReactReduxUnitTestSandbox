import * as types from './actionTypes.js';
import axios from 'axios';

export const loadTodos = () => {
  return dispatch => {
    return new Promise(async resolve => {
      try {
        const result = await axios.get('todo');
        resolve(dispatch(loadTodosSuccess(result.data)));
      } catch (error) {
        resolve(dispatch(loadTodosFailed()));
      }
    });
  };
};

export function loadTodosSuccess(todos) {
  return { type: types.LOAD_TODOS_SUCCESS, todos };
}

export function loadTodosFailed() {
  return { type: types.LOAD_TODOS_FAILED };
}
