import React from 'react'
import { Link} from 'react-router-dom'

function AboutUs() {
  return (
    <>
    <h1>Your are at AboutUs  Page</h1>

    <Link to="/">Home</Link>
    <Link to="/contact">ContactUs</Link>
    </>
  )
}

export default AboutUs