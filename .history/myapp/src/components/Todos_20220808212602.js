import React, { useState } from 'react'
import {todos as initialState} from '../data'
import TodoItem from './TodoItem';

export default function Todos() {
    const [todos, setTodos] = useState(initialState);

  return (
    <div>
        Todos:
        {todos.map(todo => <TodoItem key={todo.id} />)}
    </div>
  )
}
