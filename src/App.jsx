import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'
import React from 'react';

function App() {
  //const [count, setCount] = useState(0)
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return (
    <>
      {
        puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>
        })
      }
    </>
  )
}

export default App
