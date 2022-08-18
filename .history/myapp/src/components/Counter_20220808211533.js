import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div style={{
        width: '300px',
        display: 'flex',
        justifyContent: 'space-around'
    }}>
        <button>-</button>   
        {count}
        <button>+</button>     
    </div>
  )
}
