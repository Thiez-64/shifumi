import Image from "next/image";

interface Iprops {
  playerNameInput: string;
  handleChangeName: (text: string) => void;
}

function MyInput({ playerNameInput, handleChangeName }: Iprops): JSX.Element {
  return (
    <div className="p-1 mx-auto my-6 bg-white w-max">
      <p className="flex content-center text-xs">Enter your Alias</p>
      <div className="flex content-center">
        <div className="flex m-1">
          <Image src="/Alias.svg" alt="validate" width={25} height={25} />
        </div>
        <input
          className="flex"
          type="text"
          placeholder="Alias"
          value={playerNameInput}
          onChange={(e) => handleChangeName(e.target.value)}
        />
        <div className="flex m-1">
          <Image src="/Validate.svg" alt="validate" width={25} height={25} />
        </div>
      </div>
    </div>
  );
}

export default MyInput;
