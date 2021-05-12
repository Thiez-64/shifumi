import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import TallCard from "./TallCard";
import Users from "./Users";

interface Iprops {
  player1: string;
  player2: string;
}

function PlayerGame({ player1, player2 }: Iprops): JSX.Element {
  const choices = ["pierre", "feuille", "ciseaux"];
  const [playerOneResponse, setPlayerOneResponse] = useState("");
  const [playerTwoResponse, setPlayerTwoResponse] = useState("");
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    setPlayerTwoResponse(choices[randomIndex]);
  }, []);

  useEffect(() => {
    if (playerOneResponse.length > 0 && playerTwoResponse.length > 0) {
      setTimeout(() => {
        setPlayerOneResponse("");
        const randomIndex = Math.floor(Math.random() * choices.length);
        setPlayerTwoResponse(choices[randomIndex]);
      }, 3000);
    }
  }, [playerTwoResponse, playerOneResponse]);

  const cards = [
    { imgCard: "/Pierre.svg", colorCard: "bg-yellow-300", value: "pierre" },
    { imgCard: "/Feuille.svg", colorCard: "bg-yellow-300", value: "feuille" },
    { imgCard: "/Ciseau.svg", colorCard: "bg-yellow-300", value: "ciseaux" },
  ];
  const cardPlayedTall = { imgCard: "/Ciseau.svg", colorCard: "bg-yellow-300" };

  const cardBootTall = { imgCard: "/shifumii.png", colorCard: "bg-yellow-900" };

  const playerOne = {
    playerName: player1,
    img: "/Bear.svg",
    color: "bg-indigo-500",
  };
  const playerTwo = {
    playerName: player2,
    img: "/Alien.svg",
    color: "bg-green-500",
  };

  const setResponsePlayer1 = (value: string) => {
    setPlayerOneResponse(value);
  };

  return (
    <div className="w-full h-full bg-gray-400">
      <Users {...playerTwo} />
      <div className="flex justify-around p-6">
        {playerOneResponse.length > 0 ? (
          <TallCard value={playerTwoResponse} />
        ) : (
          <TallCard value="" />
        )}
        <TallCard value={playerOneResponse} />
      </div>
      <div className="flex justify-around p-4">
        {cards.map((card) => {
          return (
            <SmallCard
              key={card.value}
              {...card}
              onClick={setResponsePlayer1}
            />
          );
        })}
      </div>
      <Users {...playerOne} />
    </div>
  );
}

export default PlayerGame;
