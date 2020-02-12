import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loadTodos } from './actions';
import * as types from './actionTypes';

const axiosMock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Todo actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ todo: { items: [], loading: false, error: false } });
  });

  it('Should load todos from API success result', async () => {
    const successResult = [{ id: 1, title: 'todo1' }];
    axiosMock.onGet('todo').reply(200, successResult);
    const result = await store.dispatch(loadTodos());
    expect(result.type).toBe(types.LOAD_TODOS_SUCCESS);
    expect(result.todos.length).toBe(1);
  });

  it('Should handle API failure with error state', async () => {
    axiosMock.onGet('todo').reply(500);
    const result = await store.dispatch(loadTodos(() => {}));
    expect(result.type).toBe(types.LOAD_TODOS_FAILED);
  });
});
