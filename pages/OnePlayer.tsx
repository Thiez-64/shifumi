import Image from "next/image";
import Button from "../Components/Button";
import Users from "../Components/Users";
import MyInput from "../Components/MyInput";
import { useState } from "react";
import GamePlay from "../Components/GamePlay";

function OnePlayer(): JSX.Element {
  const [error, setError] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playerNameInput, setPlayerNameInput] = useState("");
  const handleChangeName = (value: string) => {
    setPlayerNameInput(value);
  };
  const [gamePlay, setGamePlay] = useState(false);
  const create = { input: "CREATE" };
  const play = { input: "LET'S PLAY" };
  const playerOne = {
    name: "Jean-Neymar",
    img: "/Bear.svg",
    color: "bg-indigo-500",
    score: 0,
  };

  const handleClickSetlayer = () => {
    setPlayerName(playerNameInput);
  };

  const handleClickStart = () => {
    if (playerName.length > 0) {
      setGamePlay(true);
    } else {
      setError("Please enter your name");
    }
  };

  if (gamePlay) {
    return <GamePlay player1={playerName} player2="Jean Neymar" />;
  }

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

        <MyInput
          input={playerNameInput}
          handleChangeInput={handleChangeName}
        />
        <Button {...create} onClick={handleClickSetlayer} />
      </div>

      <div>
        <h1 className="flex justify-center m-4 text-2xl font-bold text-center">
          Player
        </h1>
        <div className="m-8">
          <Users {...playerOne} playerName={playerName} />
          <Button {...play} onClick={handleClickStart} />
        </div>
        <span>{error}</span>
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
