import React, { useState } from 'react'

export default function Input() {
  const [value, setValue] = useState('');
  function handleChange(event) {
    console.log(value);
    setValue(event.target.value)
  }

  return (
    <input
      placeholder='Please enter your todo'
      style={{
        margin: '20px 0'
      }}
      value={value}
      onChange={(event) => handleChange(event)}
    />
  )
}
