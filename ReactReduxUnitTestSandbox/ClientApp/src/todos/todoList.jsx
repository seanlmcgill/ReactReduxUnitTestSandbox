import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './todoItem';

export const TodoList = () => {
  const todo = useSelector(state => state.todo);

  if (todo.loading) {
    return <div>Loading...</div>;
  }

  if (todo.error) {
    return <div>Ah crap, something broke.</div>;
  }

  return todo.items.map(item => <TodoItem key={item.id} todo={item} />);
};
