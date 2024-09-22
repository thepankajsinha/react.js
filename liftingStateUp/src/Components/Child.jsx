import React from 'react'

//here, the data enterd by the user is called the child data and it will be passed to the the parent component using setName function.

const Child = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=>{props.setName(e.target.value)}} />
    </div>
  )
}

export default Child
