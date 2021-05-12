import React from "react";
import Image from "next/image";

interface Iprops {
  value: string;
}

function SmallCard({ value }: Iprops): JSX.Element {
  const imgCard = (value: string) => {
    if (value === "pierre") {
      return "/Pierre.svg";
    } else if (value === "feuille") {
      return "/Feuille.svg";
    } else if (value === "ciseaux") {
      return "/Ciseau.svg";
    } else {
      return "/shifumii.png";
    }
  };

  const colorCard = (value: string) => {
    return value.length > 0 ? "bg-yellow-300" : "bg-yellow-900";
  };

  return (
    <div className={`w-40 h-64 m-1 flex justify-center ${colorCard(value)}`}>
      <Image
        className="bg-center"
        src={imgCard(value)}
        alt="card"
        width={50}
        height={60}
      />
    </div>
  );
}

export default SmallCard;
