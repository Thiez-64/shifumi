interface Iprops {
  playerOne: string;
  playerTwo: string;
  scorePlayerOne: number;
  scorePlayerTwo: number;
}

function EndOfGame({
  playerOne,
  scorePlayerOne,
  playerTwo,
  scorePlayerTwo,
}: Iprops): JSX.Element {
  if (scorePlayerOne > scorePlayerTwo) {
    return (
      <div>
        {playerOne}
        {` Wins`}
      </div>
    );
  }
  if (scorePlayerOne < scorePlayerTwo) {
    return (
      <div>
        {playerTwo}
        {` Wins`}
      </div>
    );
  }
}

export default EndOfGame;
