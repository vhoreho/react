import React, { useState } from 'react'
import styled from 'styled-components';

const FormWrapper = styled.form`
    max-width: 500px;
    margin-inline: auto;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    padding: 10px;
    font-size: 24px;
    margin: 10px;
`

export function Form({ handleAdd }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    console.log();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name,
            email,
            password
        }
        handleAdd(data)
        setName('')
        setEmail('')
        setPassword('')
        console.log('Form received');
    }

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <Input type="text" placeholder='Full name' value={name} onChange={(e) => setName(e.target.value)} />
            {!name.length && <p>Имя должно быть не менее одного символа </p>}
            <Input type="email" placeholder='Please enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder='Please enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {!passwordRegex.test(password) && <p>6 to 16 valid characters, it doesn't validate that it has at least a number, and at least a special character</p>}
            <button>Submit</button>
        </FormWrapper>
    )
}
