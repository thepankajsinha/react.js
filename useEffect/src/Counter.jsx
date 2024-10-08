import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //whenever count variable updated, uesEffect hook will run 
  useEffect(() => {console.log("Count updated", count)}, [count])
  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={() => {setCount(count + 1);}}>Click me</button>
    </div>
  );
};

export default Counter;