//State:
//State is an object which is used to store data or information about the component.
//When the state changes, React re-renders the component to display the updated state.

//Here, name is a state which stores the string value "Pankaj" initially and when changeName function is called it updates the name state with "Jhon Doe" and rerender the App component and displays the updated value of name state.

import { useState } from "react";

function App() {
  const [name, setName] = useState("Pankaj");

  const changeName = () => {
    setName("John Doe");
  };

  console.log("value of name state:", name);

  return (
    <div className="center-container">
      <h1>Your Name is : {name}</h1>
      <button onClick={changeName}>Cick</button>
    </div>
  );
}

export default App;
