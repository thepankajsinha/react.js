import { useState } from "react";
function App() {

	const [inp, setINP] = useState("Button is not clicked!");
	const handleClick = () => {
		setINP("Button is clicked");
	};
  
	return (
		<div className="App">

		      {<h2>{inp}</h2>}
		      <button onClick={handleClick}>Click me!</button> 

		</div>
	);
}
export default App;
