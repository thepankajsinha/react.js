import React from 'react'
import { Link} from 'react-router-dom'

function ContactUs() {
  return (
    <>
    <h1>Your are at ContactUs Page</h1>

    {/* Link */}
    <Link to="/">Home</Link>
    <Link to="/about">AboutUs</Link>

    </>
  )
}

export default ContactUs