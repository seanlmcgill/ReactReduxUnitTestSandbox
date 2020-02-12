import React from 'react';
import { shallow } from 'enzyme';
import { TodoItem } from './todoItem';
import { setupEnzyme } from '../test';

// Simple component tests (ie. no redux)

describe('TodoItem component', () => {
  beforeAll(() => setupEnzyme());

  const completeTodo = {
    id: 1,
    title: 'test',
    description: 'this is a test',
    completed: true,
    dueDate: '1-1-3000'
  };

  const incompleteTodo = {
    id: 1,
    title: 'test',
    description: 'this is a test',
    completed: false,
    dueDate: '1-1-3000'
  };

  it('Should render title', () => {
    const wrapper = shallow(<TodoItem todo={completeTodo} />);
    expect(wrapper.find('CardTitle').text()).toBe(completeTodo.title);
  });

  it('Should render description', () => {
    const wrapper = shallow(<TodoItem todo={completeTodo} />);
    expect(wrapper.find('CardText').text()).toBe(completeTodo.description);
  });

  it('Should render completion alert', () => {
    const successMessage = 'All Done!';
    const wrapper = shallow(<TodoItem todo={completeTodo} />);
    expect(wrapper.find('Alert').text()).toBe(successMessage);
  });

  it('Should render due date alert', () => {
    const successMessage = `Due: ${incompleteTodo.dueDate}`;
    const wrapper = shallow(<TodoItem todo={incompleteTodo} />);
    expect(wrapper.find('Alert').text()).toBe(successMessage);
  });
});
