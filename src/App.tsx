import React, { MouseEventHandler, useState } from "react";
import { RandomFox } from "./RandomFox";
import "./App.css";
const random = () => Math.floor(Math.random() * 100);

const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};
type imageItem = { id: string; url: string };
function App() {
  // const image = `https://randomfox.ca/images/${random()}.jpg`;
  const [images, setImages] = useState<Array<imageItem>>([]);
  const addImage: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const image: imageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([...images, image]);
  };
  return (
    <>
      <h1 className="text-xl font-bold">Random Fox</h1>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addImage}
        >
          Add Fox
        </button>
      </div>
      {images.map((image) => (
        <div key={image.id} className="p-4">
          <RandomFox image={image.url} />
        </div>
      ))}
    </>
  );
}
export default App;
