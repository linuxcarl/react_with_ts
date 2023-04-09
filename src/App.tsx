import React, { useState } from "react";
import { RandomFox } from "./RandomFox";
import "./App.css";
const random = () => Math.floor(Math.random() * 100);

const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};
type imageItem = { id: string; url: string };
function App() {
  // const image = `https://randomfox.ca/images/${random()}.jpg`;
  const [images] = useState<Array<imageItem>>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);
  return (
    <>
      <h1 className="text-xl font-bold">Random Fox</h1>
      {images.map((image) => (
        <div key={image.id} className="p-4">
          <RandomFox image={image.url} />
        </div>
      ))}
    </>
  );
}
export default App;
