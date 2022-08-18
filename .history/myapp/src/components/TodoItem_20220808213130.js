import React from 'react'

export default function TodoItem(props) {
    const { id, copmpleted, title } = props;
    return (
        <li style={{
            background: $eee;
        }}>
            {title}
        </li>
    )
}
