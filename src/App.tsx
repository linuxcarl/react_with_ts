import React from "react";
import { RandomFox } from "./RandomFox";
import "./App.css";
const random = () => Math.floor(Math.random() * 100);
const image = `https://randomfox.ca/images/${random()}.jpg`;

function App() {
  return (
    <>
      <h1 className="text-xl font-bold">Random Fox</h1>
      <RandomFox image={image} />
    </>
  );
}
export default App;
