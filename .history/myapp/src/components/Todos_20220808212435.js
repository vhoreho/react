import React, { useState } from 'react'
import {todos as initialState} from '../data'

export default function Todos() {
    const [todos, setTodos] = useState(initialState);
    console.log(todos);
  return (
    <div>Todos</div>
  )
}
