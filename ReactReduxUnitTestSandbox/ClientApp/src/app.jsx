import * as React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { TodoList } from './todos';

export const App = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>React Redux Unit Testing Sample</h1>
        <p>
          This little sample app serves as a simple example of how to unit test
          each type of react & redux layer component (actions, reducers,
          components, etc)
        </p>
      </Jumbotron>
      <TodoList />
    </Container>
  );
};
