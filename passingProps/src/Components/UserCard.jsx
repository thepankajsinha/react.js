import React from 'react'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <h2>{props.name}</h2>
      <img id="user-img"src={props.image}/>
      <p>{props.description}</p>
    </div>
  )
}

export default UserCard
