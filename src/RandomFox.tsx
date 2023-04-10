import React, { useRef } from "react";

type Props = { image: string };
export const RandomFox = ({ image }: Props): JSX.Element => {
  const refNode = useRef<HTMLImageElement>(null);
  return (
    <img
      ref={refNode}
      width={320}
      height="auto"
      className="rounded"
      src={image}
    />
  );
};
