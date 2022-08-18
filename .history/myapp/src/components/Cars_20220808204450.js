import React from 'react';
import {cars} from '../data';
import Car from './Car';

export default function Cars() {
  return (
    <div>
        <h1>Cars:</h1>
        <ul style={{
          listStyle: 'none'
        }}>
            {cars.map((item, index) => <Car key={index} title={item.Name} year={item.Year} origin={item.Origin} />)}
        </ul>
    </div>
  )
}
