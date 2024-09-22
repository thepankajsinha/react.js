import { useState } from 'react'
import './App.css'
import Child from './Components/Child'

//Lifting state up: is used to transfer data from child to parent components

//App() is the parent component, name and setName are passed by App() using props to the child component and the value of variable "name" at line 15 is received from the child component.

function App() {
  const [name, setName] = useState('')

  return (
    <>
      <Child name ={name} setName={setName}/> 
      <p>The name of parent is {name}</p>
    </>
  )
}

export default App
