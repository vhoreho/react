import React from 'react'

export default function Car(props) {
  return (
    <li style={{
      margin: '15px 0',
      background: 'purple'
    }}>
      <p>Name: {props.Name}</p>
      <p>Made In: {props.Origin}</p>
    </li>
  )
}
