import React, { useState } from 'react'
import { todos as initialState } from '../data'
import TodoItem from './TodoItem';

export default function Todos() {
    const [todos, setTodos] = useState(initialState.slice[0, 10]);

    return (
        <div>
            Todos:
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
            </ul>
        </div>
    )
}
