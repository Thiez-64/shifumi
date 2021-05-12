import React, { useState } from "react";
import { useRouter } from "next/router";

interface Iprops {
  input: string;
  href?: string;
  setPlayerName?: Function;
}

function Button({ input, href, setPlayerName }: Iprops): JSX.Element {
  const router = useRouter();

  const [IsClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
    setIsClicked((prevState) => !prevState);
    if (setPlayerName) {
      setPlayerName("");
    }
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
