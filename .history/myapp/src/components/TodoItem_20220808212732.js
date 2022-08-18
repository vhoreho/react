import React from 'react'

export default function TodoItem(props) {
    const { id, copmpleted, title } = props;
    return (
        <li>
            {title}
        </li>
    )
}
