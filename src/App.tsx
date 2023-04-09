import React, { useState } from "react";
import { RandomFox } from "./RandomFox";
import "./App.css";
const random = () => Math.floor(Math.random() * 100);

function App() {
  // const image = `https://randomfox.ca/images/${random()}.jpg`;
  const [images, setImage] = useState([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);
  return (
    <>
      <h1 className="text-xl font-bold">Random Fox</h1>
      {images.map((image, index) => (
        <div key={index} className="p-4">
          <RandomFox image={image} />
        </div>
      ))}
    </>
  );
}
export default App;
