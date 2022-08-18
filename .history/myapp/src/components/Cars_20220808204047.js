import React from 'react';
import {cars} from '../data';

export default function Cars() {
  return (
    <div>
        <h1>Cars:</h1>
        <ul>
            {cars.map((item, index) => <li key={index}>{item.Name}</li>)}
        </ul>
    </div>
  )
}
