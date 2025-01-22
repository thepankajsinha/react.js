import React from 'react'
import {useNavigate} from 'react-router-dom'

function AboutUs() {
    const navigate = useNavigate()
    function goToContact(){
        navigate("/contact")
    }
    function goToHome(){
        navigate("/")
    }
  return (
    <>
    <h1>Your are at AboutUs  Page</h1>

    {/* useNavigate */}
    <button onClick={goToHome}>Home</button>
    <button onClick={goToContact}>ContactUs</button>
    </>
  )
}

export default AboutUs