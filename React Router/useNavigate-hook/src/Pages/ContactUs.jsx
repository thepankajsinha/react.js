import React from 'react'
import {useNavigate} from 'react-router-dom'

function ContactUs() {
    const navigate = useNavigate()
    function goToAbout(){
        navigate("/about")
    }

    function goToHome(){
        navigate("/")
    }
  return (
    <>
    <h1>Your are at ContactUs Page</h1>

    {/* useNavigate */}
    <button onClick={goToHome}>Home</button>
    <button onClick={goToAbout}>AboutUs</button>
    </>
  )
}

export default ContactUs