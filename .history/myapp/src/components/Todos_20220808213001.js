import React, { useState } from 'react'
import { todos as initialState } from '../data'
import TodoItem from './TodoItem';
import Input from './Input';

export default function Todos() {
    const [todos, setTodos] = useState(initialState);

    return (
        <div>
            <h2>Todos:</h2>
            <Input />
            <ul style={{
                listStyle: 'none'
            }}>
                {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
            </ul>
        </div>
    )
}
