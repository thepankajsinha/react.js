import React from "react";
import { useState } from "react";

//Here, count is a state variable, setCount is a function to update the count state and useState(0) provide the default value for the count variable. Ex: 0 is the default value for the count variable and setCount function will update count by 1.
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={() => {setCount(count + 1);}}>Click me</button>
    </div>
  );
};

export default Counter;
