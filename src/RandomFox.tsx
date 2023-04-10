import React, { useRef, useEffect, useState } from "react";

type Props = { image: string };
export const RandomFox = ({ image }: Props): JSX.Element => {
  const refNode = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("intersecting");
          setSrc(image);
        }
      });
    });
    if (refNode.current) {
      observer.observe(refNode.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [image]);
  return (
    <img
      ref={refNode}
      width={320}
      height="auto"
      className="mx-auto rounded-md bg-gray-300"
      src={src}
    />
  );
};
