import React, { useState } from 'react'
import styled from 'styled-components';
import StringToUpperCase from '../../../utils/string';

const Todo = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 2px solid palevioletred;
    border-radius: 10px;
`

const Title = styled.h3`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    max-width: 300px;
    text-align: left;
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`

const Button = styled.button`
    padding: 10px;
    background: transparent;
    color: palevioletred;
    border: 1px solid palevioletred;
    cursor: pointer;
    &:hover {
        background: palevioletred;
        color: #25273C;
    }
`

const DeleteButton = styled.button`
    padding: 10px;
    background: transparent;
    color: palevioletred;
    border: 1px solid palevioletred;
    cursor: pointer;
    &:hover {
        background: palevioletred;
        color: #25273C;
    }
`

export function TodoItem({ todo, deleteTodo }) {
  const { title, completed, id } = todo;
  const [done, setDone] = useState(completed);

  function handleCompleted() {
    setDone(!done);
  }

  function handleDeleteBtn(id) {
    deleteTodo(id);
  }

  return (
    <Todo>
      <Title completed={done}>{StringToUpperCase(title)}</Title>
      <div>
        <Button onClick={handleCompleted}>Done</Button>
        <DeleteButton onClick={() => handleDeleteBtn(id)}>Delete</DeleteButton>
      </div>
    </Todo>
  )
}
