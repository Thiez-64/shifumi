import Image from "next/image";

function NumberInput(): JSX.Element {
  return (
    <div className="p-1 mx-auto my-6 bg-white w-max">
      <p className="flex content-center text-xs">Enter your Code</p>
      <div className="flex content-center">
        <div className="flex m-1">
          <Image src="/Number.svg" alt="validate" width={25} height={25} />
        </div>
        <input className="flex" type="text" placeholder="Code" />
        <div className="flex m-1">
          <Image src="/Validate.svg" alt="" width={25} height={25} />
        </div>
      </div>
    </div>
  );
}

export default NumberInput;
