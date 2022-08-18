import React from 'react'

export default function TodoItem(props) {
    const { id, copmpleted, title, deleteTodo } = props;
    return (
        <li style={{
            background: '#eee',
            display: 'block',
            margin: '10px 0',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            {`${id} ${title}`}
            <button onClick={deleteTodo(id)}>Delete</button>
        </li>
    )
}
