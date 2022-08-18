import React, { useState } from 'react'
import TodoItem from './TodoItem';
import Input from './Input';

const initialState = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
]

export default function Todos() {
    const [todos, setTodos] = useState(initialState);

    function addTodo(todo) {
        let copy = [...todos];
        copy.push({
            userId: 1,
            id: Math.floor(Math.random() * 200),
            title: todo,
            completed: false
        });
        setTodos(copy)
    }

    function handleDeleteTodo(id) {
        console.log(id);
        let filteredTodos = [...todos];
        filteredTodos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
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
                {todos.map(todo => <TodoItem key={todo.id} {...todo} deleteTodo={handleDeleteTodo} />)}
            </ul>
        </div>
    )
}
