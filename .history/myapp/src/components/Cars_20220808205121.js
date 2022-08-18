import React from 'react';
import {cars} from '../data';
import Car from './Car';

export default function Cars() {
  return (
    <div>
        <h1>Cars:</h1>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          color: 'white',
          fontSize: '1.4rem',
          display: 'flex',
          flexWrap: 'wrap'
        }}>
            {cars.map((item, index) => <Car key={index} {...item} />)}
        </ul>
    </div>
  )
}
