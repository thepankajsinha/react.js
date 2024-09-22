import React from 'react'
import { useState } from 'react'
import "./Counter.css"
const Counter = () => {
    //Here, counter is a variable, setCount is a function to update the counter and useState(0) provide the default value for the counter variable
    const [count, setCount] = useState(0)
  return (
    <div className='counter-container'>
      <p id='para'>You have clicked {count} times</p>
      <button id='btn' onClick={()=> {setCount(count+ 1)}}>Click me</button>
    </div>
  )
}

export default Counter
