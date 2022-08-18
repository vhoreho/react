import React, { useState } from 'react'

export default function Input() {
  const [value, setValue] = useState('');
  function handleChange(event) {
    setValue(event.target.value)
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
      <button>Add todo</button>
    </div>

  )
}
