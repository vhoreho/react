import React from 'react'

export default function TodoItem(props) {
    const { id, copmpleted, title } = props;
    return (
        <li style={{
            background: '#eee',
            display: 'block',
            margin: '10px 0',
            padding: '10px'
        }}>
            {title}
            <button>Delete</button>
        </li>
    )
}
