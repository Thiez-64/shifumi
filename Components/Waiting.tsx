interface Iprops {
  player: string;
}

function Waiting({ player }: Iprops): JSX.Element {
  return (
    <div className="flex items-center w-full p-1 mx-auto my-6 bg-white">
      {player} is waiting for other player ...
    </div>
  );
}

export default Waiting;
