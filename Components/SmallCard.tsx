import React from "react";
import Image from "next/image";

interface Iprops {
  imgCard: string;
  colorCard: string;
}

function SmallCard({ imgCard, colorCard }: Iprops): JSX.Element {
  return (
    <div className={`w-20 h-32 flex justify-center ${colorCard}`}>
      <Image
        className="bg-center"
        src={imgCard}
        alt="card"
        width={50}
        height={60}
      />
    </div>
  );
}

export default SmallCard;
