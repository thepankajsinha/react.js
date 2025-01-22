//useNavigate is also used to pass data from one page to another
import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const id = 5;
    const navigate = useNavigate();
    function goToAbout(){
        navigate("/about", {state : {id : id}})
    }
  return (
    <>
        <h1>I am Home page</h1>
        <button onClick={goToAbout}>AboutUs</button>
    </>
  )
}

export default Home