import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { TodoList } from './todoList';
import { setupEnzyme, mountWithProvider } from '../test';

// Redux mocked component tests

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('TodoList component', () => {
  beforeAll(() => setupEnzyme());

  const items = [
    {
      id: 1,
      title: 'test',
      description: 'this is a test',
      completed: true,
      dueDate: '1-1-3000'
    },
    {
      id: 2,
      title: 'test',
      description: 'this is a test',
      completed: false,
      dueDate: '1-1-3000'
    }
  ];

  it('Should render todo list component with items set', () => {
    const store = mockStore({
      todo: { items: items }
    });
    const wrapper = mountWithProvider(<TodoList />)(store);
    expect(wrapper.find('TodoList'));
  });

  it('Should render todo list component with no items', () => {
    const store = mockStore({
      todo: { items: [] }
    });
    const wrapper = mountWithProvider(<TodoList />)(store);
    expect(wrapper.find('TodoList'));
  });

  it('Should render todo list component loading state', () => {
    const loadingText = 'Loading...';
    const store = mockStore({
      todo: { items: [], loading: true }
    });
    const wrapper = mountWithProvider(<TodoList />)(store);
    expect(wrapper.find('TodoList div').text()).toBe(loadingText);
  });

  it('Should render todo list component error state', () => {
    const errorText = 'Ah crap, something broke.';
    const store = mockStore({
      todo: { items: [], loading: false, error: true }
    });
    const wrapper = mountWithProvider(<TodoList />)(store);
    expect(wrapper.find('TodoList div').text()).toBe(errorText);
  });
});
