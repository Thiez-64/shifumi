import React, { useState } from "react";

interface Iprops {
  input: string;
}

function Button({ input }: Iprops): JSX.Element {
  const [IsClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className={`h-10 ${
          IsClicked ? "bg-white border-red-600" : "bg-red-600 border-white"
        } rounded-3xl focus:outline-none`}
      >
        <div
          className={`${
            IsClicked ? "text-red-600" : "text-white"
          } font-bold px-4`}
        >
          {input}
        </div>
      </button>
    </div>
  );
}

export default Button;
