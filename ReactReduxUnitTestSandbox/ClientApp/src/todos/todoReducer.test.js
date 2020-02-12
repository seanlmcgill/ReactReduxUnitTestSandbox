import { todoReducer } from './todoReducer';
import * as types from './actionTypes';

describe('Todo reducer', () => {
  it('Should return initial state', () => {
    const state = todoReducer(undefined, { type: '' });
    expect(state.items).toBeTruthy();
    expect(state.loading).toBe(true);
    expect(state.error).toBe(false);
  });

  it('Should return load success state', () => {
    const state = todoReducer(undefined, {
      type: types.LOAD_TODOS_SUCCESS,
      todos: []
    });
    expect(state.items).toBeTruthy();
    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
  });

  it('Should return load failure state', () => {
    const state = todoReducer(undefined, {
      type: types.LOAD_TODOS_FAILED
    });
    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
  });
});
