import React from 'react'
import TodoItem from './TodoItem'

export default function Todos() {
  return (
    <div>
        <h1>Todos:</h1>
        <ul>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    </div>
  )
}
