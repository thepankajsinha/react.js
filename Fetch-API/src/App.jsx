import { useEffect } from "react"
import { useState } from "react"
import UserCard from "./UserCard"


function App() {
  const [data, setData] = useState(null)
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => setData(posts))
  },[])


  return (
    <div>
        {data ? data.map((e) => <UserCard title = {e.title} body={e.body}/>) : <li>Data is loading...</li>}

    </div>
  )
}

export default App
