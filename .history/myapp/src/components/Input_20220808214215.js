import React, { useState } from 'react'

export default function Input({ addTodo }) {
  const [value, setValue] = useState('');
  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleAddTodo() {

  }

  return (
    <div>
      <input
        placeholder='Please enter your todo'
        style={{
          margin: '20px 0'
        }}
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>

  )
}
