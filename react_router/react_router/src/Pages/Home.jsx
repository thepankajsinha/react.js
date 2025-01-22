//For moving one page to another page we can use either link or useNavigate hook
import React from 'react'
import { Link} from 'react-router-dom'

function Home() {

  return (
    <>
        <h1>Your are at Home Page</h1>

        <Link to="/about">AboutUs</Link>
        <Link to="/contact">ContactUs</Link>

    </>
  )
}

export default Home