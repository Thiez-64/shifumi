import React, { useState } from "react";

function Button() {
  const input = "START";
  const [IsClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  return (
    <button
      onClick={handleClick}
      className={`w-24 h-10 ${
        IsClicked ? "bg-white border-red-600" : "bg-red-600 border-white"
      } rounded-3xl focus:outline-none`}
    >
      <div className={`${IsClicked ? "text-red-600" : "text-white"} font-bold`}>
        {input}
      </div>
    </button>
  );
}

export default Button;
