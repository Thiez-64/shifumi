import React, { useState } from "react";
import { useRouter } from "next/router";

interface Iprops {
  input: string;
  href?: string;
  onClick?: () => void;
}

function Button({ input, href, onClick }: Iprops): JSX.Element {
  const router = useRouter();

  const [IsClicked, setIsClicked] = useState(false);

  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
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
