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
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-400">
      <p className="flex items-center m-10 text-3xl font-bold text-center">
        {scorePlayerOne > scorePlayerTwo
          ? `${playerOne}, you are a Winner !`
          : `${playerTwo}, you are a Winner !`}
      </p>
      <div className="flex items-center justify-center m-6">
        <button
          className={`h-10 bg-red-600 border-white rounded-3xl focus:outline-none`}
          onClick={reInitState}
        >
          <div className={`text-white font-bold px-4`}> REJOUER</div>
        </button>
      </div>
      <div className="flex items-center justify-center m-6">
        <Link href="/">
          <a>
            <button
              className={`h-10 flex items-center bg-red-600 border-white rounded-3xl focus:outline-none`}
            >
              <div className={`text-white font-bold px-4`}>
                RETOUR A L'ACCUEIL
              </div>
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default EndOfGame;
