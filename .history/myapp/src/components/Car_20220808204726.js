import React from 'react'

export default function Car(props) {
  return (
    <li style={{
      margin: '15px 0',
      background: 'rgba(#000, .8)'
    }}>{props.Name}</li>
  )
}
