import React from 'react';
import {cars} from '../data';

export default function Cars() {
  return (
    <div>
        <h1>Cars:</h1>
        <ul>
            {cars.map(item => <li>{item.Name}</li>)}
        </ul>
    </div>
  )
}
