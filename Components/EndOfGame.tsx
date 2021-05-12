import Link from "next/link";

interface Iprops {
  playerOne: string;
  playerTwo: string;
  scorePlayerOne: number;
  scorePlayerTwo: number;
  setPlayerOneResponse: (text: string) => void;
  setPlayerTwoResponse: (text: string) => void;
  setScorePlayerOne: (text: number) => void;
  setScorePlayerTwo: (text: number) => void;
}

function EndOfGame({
  playerOne,
  playerTwo,
  scorePlayerOne,
  scorePlayerTwo,
  setPlayerOneResponse,
  setPlayerTwoResponse,
  setScorePlayerOne,
  setScorePlayerTwo,
}: Iprops): JSX.Element {
  const reInitState = () => {
    setPlayerOneResponse("");
    setPlayerTwoResponse("");
    setScorePlayerOne(0);
    setScorePlayerTwo(0);
  };
  return (
    <div>
      <p>
        {scorePlayerOne > scorePlayerTwo
          ? `${playerOne} Wins`
          : `${playerTwo} Wins`}
      </p>
      <div>
        <button onClick={reInitState}> Rejouer</button>
      </div>
      <div>
        <Link href="/">
          <a>
            <button onClick={() => {}}>Retour à l'Accueil</button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default EndOfGame;
