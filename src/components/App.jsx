import { createRoot } from "react-dom"
import Pet from "./Pet"
//Components
//Data
const infoPets = [
  { name: "Magola", animal: "Cat", breed: "Mixed" },
  { name: "Arya", animal: "Cat", breed: "Mixed" },
  { name: "Simón", animal: "Cat", breed: "Siames" },
  { name: "Ramón", animal: "Dog", breed: "Mixed" },
]

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {infoPets.map((pet) => (
        <Pet name={pet.name} animal={pet.animal} breed={pet.breed} />
      ))}
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
