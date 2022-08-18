import React from 'react'

export default function TodoItem(props) {
    const { id, copmpleted, title } = props;
    return (
        <li style={{
            background: '#eee',
            display: 'inline-block',
            margin: '10px 0'
        }}>
            {title}
        </li>
    )
}
