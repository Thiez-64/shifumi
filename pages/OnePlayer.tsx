import Image from "next/image";
import Button from "../Components/Button";
import Users from "../Components/Users";
import MyInput from "../Components/MyInput";

function OnePlayer(): JSX.Element {
  
  const create = { input: "CREATE" };
  const play = { input: "LET'S PLAY" };
  const playerOne = {
    name: "Jean-Neymar",
    img: "/Bear.svg",
    color: "bg-indigo-500",
  };
  
  return (
    <div className="w-full h-full bg-gray-400">
      <header className="flex items-center justify-center h-40 py-2">
        <Image
          className="flex justify-center "
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
          Create a game
        </h1>
        <MyInput />
        <Button {...create} />
      </div>

      <div> 
      <h1 className="flex justify-center m-4 text-2xl font-bold text-center">
        Player
      </h1>
      <div className="m-8">
        <Users {...playerOne} />
        <Button {...play} />
      </div>
      </div>

      <footer className="flex items-center justify-center h-40 py-2">
        <h5 className="flex mx-8 text-xs text-center">
          Design by Matthias, Benjamin, Matthieu Made at the Wild Code School
        </h5>
      </footer>
    </div>
  );
}

export default OnePlayer;
