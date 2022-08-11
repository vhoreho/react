import React from 'react'
import { useState } from 'react';
import styles from './styles.module.css';

export function Input({ addTodo }) {
    const [value, setValue] = useState('');

    function handleChanage(e) {
        setValue(e.target.value)
    }

    return (
        <div className={styles.input}>
            <input
                type="text"
                placeholder='Create a new todo...'
                value={value}
                onChange={handleChanage}
                className={styles.field}
            />
            <button className={styles.btn} onClick={() => addTodo(value)}>Add</button>
        </div>
    )
}
