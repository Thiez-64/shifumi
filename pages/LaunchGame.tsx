import Image from "next/image";
import Button from "../Components/Button";
import Users from "../Components/Users";

function LaunchGame(): JSX.Element {
  const go = { input: "PLAY" };
  const playerOne = { name: "Jean-Neymar" };
  const playerTwo = { name: "Louis-Vianey" };
  return (
    <div className="w-full h-full bg-gray-400">
      <header className="flex items-center justify-center h-40 py-2">
        <Image
          className="flex justify-center"
          src="/shifumii.png"
          alt=""
          width={60}
          height={60}
        />
        <h1 className="flex mx-8 text-3xl font-bold text-center">
          Shifumii Game
        </h1>
      </header>
      <div className="m-8">
        <h1 className="flex justify-center m-4 text-2xl font-bold text-center">
          Please wait a second Player
        </h1>
        <Users {...playerOne} />
      </div>
      <h1 className="justify-center m-8 text-center">VS</h1>
      <h1 className="flex justify-center m-4 text-2xl font-bold text-center">
        Player
      </h1>
      <div className="m-8">
        <Users {...playerTwo} />
        <Button {...go} />
      </div>
      <footer className="flex items-center justify-center h-40 py-2"></footer>
    </div>
  );
}

export default LaunchGame;
