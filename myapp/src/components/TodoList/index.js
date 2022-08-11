import React from 'react';
import { TodoItem } from './components/TodoItem';
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 600px;
`

export function TodoList({ todos, deleteTodo }) {
    return (
        <List>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />)}
        </List>
    )
}

