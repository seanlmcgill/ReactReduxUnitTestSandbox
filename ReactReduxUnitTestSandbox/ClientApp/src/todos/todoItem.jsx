import React from 'react';
import { Card, Alert } from 'react-bootstrap';

export const TodoItem = props => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.todo.title}</Card.Title>
        <Card.Text>{props.todo.description}</Card.Text>
        {props.todo.completed
          ? showDoneAlert()
          : showDueAlert(props.todo.dueDate)}
      </Card.Body>
    </Card>
  );
};

const showDueAlert = date => {
  return <Alert variant="info">Due: {date}</Alert>;
};

const showDoneAlert = () => {
  return <Alert variant="success">All Done!</Alert>;
};
