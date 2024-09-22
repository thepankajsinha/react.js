import UserCard from "./Components/UserCard"
import IsaacNewton from "./assets/IsaacNewton.jpg"
import MarieCurie from "./assets/MarieCurie.jpg"
import NikolaTesla from "./assets/NikolaTesla.jpeg"
import AlexanderFleming from "./assets/AlexanderFleming.jpg"
import AlbertEinstein from "./assets/AlbertEinstein.jpg"
import './App.css'

//Props are used to transfer data from parent to child components
//Here, App component is a parent component that transfer data to child component
function App() {

  return (
    <div className="container">
      <UserCard name ="Isaac Newton" image={IsaacNewton}  description="Laws of Motion and Gravity"/>
      <UserCard name ="Marie Curie"  image={MarieCurie}  description="Discovery of radioactivity and elements" />
      <UserCard name ="Albert Einstein"  image={AlbertEinstein}  description="Special and General Relativity Theories"/>
      <UserCard name ="Alexander Fleming"  image={AlexanderFleming}  description="Penicillin, first antibiotic for infections"/>
      <UserCard name ="Nikola Tesla"  image={NikolaTesla}  description="Alternating Current for electricity distribution"/>
    </div>
  )
}

export default App
