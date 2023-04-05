import React from "react";

type Props = { image: string };
export const RandomFox = ({ image }: Props): JSX.Element => {
  return <img width={320} height="auto" className="rounded" src={image} />;
};
