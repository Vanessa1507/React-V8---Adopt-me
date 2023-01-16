import React from "react"
import { createRoot } from "react-dom"

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ])
}

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Magola", animal: "cat", breed: "Mixed" }),
    React.createElement(Pet, { name: "Arya", animal: "cat", breed: "Mixed" }),
    React.createElement(Pet, { name: "Simón", animal: "cat", breed: "Siames" }),
    React.createElement(Pet, { name: "Ramón", animal: "dog", breed: "Mixed" }),
  ])
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(React.createElement(App))
