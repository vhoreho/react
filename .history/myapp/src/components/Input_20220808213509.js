import React, { useState } from 'react'

export default function Input() {
  const [value, setValue] = useState('Hello');
  return (
    <input
      placeholder='Please enter your todo'
      style={{
        margin: '20px 0'
      }}
      value={value}
      onChange={(event) => setValue(event.target.value)};
    />
  )
}
