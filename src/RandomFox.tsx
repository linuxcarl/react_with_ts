import React from "react";
const random = () => Math.floor(Math.random() * 100);

export const RandomFox = (): JSX.Element => {
  const img = `https://randomfox.ca/images/${random()}.jpg`;
  return <img width={320} height="auto" className="rounded" src={img} />;
};
