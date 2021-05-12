import Button from "../Components/Button";
import Image from "next/image";

export default function HomeStart(): JSX.Element {
  const start = { input: "START" };
  const multi = { input: "MULTI-PLAYER" };
  return (
    <div className="flex flex-col items-center bg-gray-400  bg-no-repeat h-screen bg-cover bg-center">
      <div className="infos  text-center md:text-center font-Quantico w-50 px-16 ">
        <p>Design by Matthias, Benjamin, Matthieu Made at Wild Code School</p>
      </div>

      <div className="flex justify-center pt-16 p-8 ">
        <Image
          className="bg-cover "
          src="/shifumii.png"
          alt=""
          width={400}
          height={383}
        />
      </div>
      <div className="text-2xl pt-4">
        <div>
          <p>Shifumi Game</p>
        </div>
      </div>

      <div className=" pt-9 ">
        <Button {...start} />
      </div>

      <div className="pt-6">
        <Button {...multi} />
      </div>
    </div>
  );
}
