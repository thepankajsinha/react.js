import { useState } from 'react'
import './App.css'

//Conditional rendering is used to display components based on some condition
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

    // Handle login
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    // Handle logout
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <h2>Welcome, User!</h2>
            <button id='btn1' onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>Please log in</h2>
            <button id='btn2' onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    );
}

export default App

