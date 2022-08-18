import React, { useState } from 'react'
import { todos as initialState } from '../data'
import TodoItem from './TodoItem';
import Input from './Input';

export default function Todos() {
    const [todos, setTodos] = useState(initialState);

    return (
        <div>
            Todos:
            <Input />
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
            </ul>
        </div>
    )
}
