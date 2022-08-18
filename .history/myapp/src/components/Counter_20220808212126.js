import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    function handleDecrement () {
        setCount(count - 1);
    }

    function handleIncrement () {
        setCount(count + 1);
    }
  return (
    <div style={{
        marginTop: '20px',
        marginInline: 'auto',
        width: '100px',
        display: 'flex',        
        justifyContent: 'space-around'
    }}>
        <button onClick={() => setCount(count - 1)}>-</button>   
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>     
    </div>
  )
}
