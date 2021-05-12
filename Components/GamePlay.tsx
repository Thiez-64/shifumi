import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import TallCard from "./TallCard";
import Users from "./Users";
import EndOfGame from "./EndOfGame";

interface Iprops {
  player1: string;
  player2: string;
}

function PlayerGame({ player1, player2 }: Iprops): JSX.Element {
  const choices = ["pierre", "feuille", "ciseaux"];
  const [playerOneResponse, setPlayerOneResponse] = useState("");
  const [playerTwoResponse, setPlayerTwoResponse] = useState("");
  const [scorePlayerOne, setScorePlayerOne] = useState(0);
  const [scorePlayerTwo, setScorePlayerTwo] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [viewCards, setViewCard] = useState(true);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    setPlayerTwoResponse(choices[randomIndex]);
  }, [gameEnd]);

  useEffect(() => {
    if (playerOneResponse.length > 0 && playerTwoResponse.length > 0) {
      setTimeout(() => {
        haveScore(playerOneResponse, playerTwoResponse);
        setPlayerOneResponse("");
        const randomIndex = Math.floor(Math.random() * choices.length);
        setPlayerTwoResponse(choices[randomIndex]);
        setViewCard(true);
      }, 3000);
    }
  }, [playerTwoResponse, playerOneResponse]);

  const haveScore = (responseOne: string, responseTwo: string) => {
    if (responseOne === "pierre" && responseTwo === "feuille") {
      setScorePlayerTwo((prevState) => prevState + 1);
      return;
    }
    if (responseOne === "pierre" && responseTwo === "ciseaux") {
      setScorePlayerOne((prevState) => prevState + 1);
      return;
    }
    if (responseOne === "ciseaux" && responseTwo === "feuille") {
      setScorePlayerOne((prevState) => prevState + 1);
      return;
    }
    if (responseOne === "ciseaux" && responseTwo === "pierre") {
      setScorePlayerTwo((prevState) => prevState + 1);
      return;
    }
    if (responseOne === "feuille" && responseTwo === "pierre") {
      setScorePlayerOne((prevState) => prevState + 1);
      return;
    }
    if (responseOne === "feuille" && responseTwo === "ciseaux") {
      setScorePlayerTwo((prevState) => prevState + 1);
      return;
    }
    if (responseOne === responseTwo) {
      return;
    }
  };

  useEffect(() => {
    if (scorePlayerOne === 3 || scorePlayerTwo === 3) {
      setGameEnd(true);
    } else {
      setGameEnd(false);
    }
  }, [scorePlayerOne, scorePlayerTwo]);

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
    score: scorePlayerOne,
  };
  const playerTwo = {
    playerName: player2,
    img: "/Alien.svg",
    color: "bg-green-500",
    score: scorePlayerTwo,
  };

  const setResponsePlayer1 = (value: string) => {
    setViewCard(false);
    setTimeout(() => {
      setPlayerOneResponse(value);
    }, 2000);
  };
  if (gameEnd) {
    return (
      <EndOfGame
        playerOne={playerOne.playerName}
        playerTwo={playerTwo.playerName}
        scorePlayerOne={scorePlayerOne}
        scorePlayerTwo={scorePlayerTwo}
        setScorePlayerOne={setScorePlayerOne}
        setScorePlayerTwo={setScorePlayerTwo}
        setPlayerOneResponse={setPlayerOneResponse}
        setPlayerTwoResponse={setPlayerTwoResponse}
      />
    );
  }
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
      <div className="flex h-48 justify-around p-4">
        {viewCards &&
          cards.map((card) => {
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
