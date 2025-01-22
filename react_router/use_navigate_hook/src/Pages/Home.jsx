//For moving one page to another page we can use either link or useNavigate hook
import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    function goToAbout(){
        navigate("/about")
    }

    function goToContact(){
        navigate("/contact")
    }
  return (
    <>
        <h1>Your are at Home Page</h1>

         {/* useNavigate */}
         <button onClick={goToAbout}>AboutUs</button>
         <button onClick={goToContact}>ContactUs</button>
    </>
  )
}

export default Home