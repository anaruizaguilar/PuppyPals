import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'
import React from 'react';

function App() {
  //const [count, setCount] = useState(0)
  const [puppies, setPuppies] = useState(puppyList);
  //console.log(puppies);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      {
        puppies.map((puppy) => {
          return <p onClick={() => { setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
      }
      { featPupId && (
        <div class="featured-pup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      ) }
    </>
  )
}

export default App
