import React from "react";
import Image from "next/image";

interface Iprops {
  imgCard: string;
  colorCard: string;
  value: string;
  onClick: (value: string) => void;
}

function SmallCard({
  imgCard,
  colorCard,
  value,
  onClick,
}: Iprops): JSX.Element {
  return (
    <button
      id={value}
      className={`w-20 h-32 flex justify-center ${colorCard}`}
      onClick={() => onClick(value)}
    >
      <Image
        className="bg-center"
        src={imgCard}
        alt="card"
        width={50}
        height={60}
      />
    </button>
  );
}

export default SmallCard;
