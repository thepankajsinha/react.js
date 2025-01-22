//useLocation hook is used to receive data which is passing from other pages

import React from 'react'
import {useLocation} from 'react-router-dom'

function AboutUs() {
    const location = useLocation()
  return (
    <>
        <h1>Hi, I am AboutUs page and my ID is {location.state.id}</h1>
    </>
  )
}

export default AboutUs