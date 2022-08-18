import React, { useState } from 'react'
import { todos as initialState } from '../data'
import TodoItem from './TodoItem';
import Input from './Input';

export default function Todos() {
    const [todos, setTodos] = useState(initialState);

    function addTodo(todo) {
        setTodos(todos.push({
            id: Math.floor(Math.random() * 200),
            title: todo,
            completed: false
        }));
        console.log(todos);
    }

    return (
        <div>
            <h2>Todos:</h2>
            <Input addTodo={addTodo} />
            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
            }}>
                {todos?.map(todo => <TodoItem key={todo.id} {...todo} />)}
            </ul>
        </div>
    )
}
