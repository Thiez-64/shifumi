import Image from "next/image";

function MyInput(): JSX.Element {
  return (
    <div>
      <p className="text-xs">Enter your Alias</p>
      <div className="flex content-center">
        <input className="border-black" type="text" placeholder="Alias" />
        <div>
          <Image src="/Validate.svg" alt="validate" width={25} height={25} />
        </div>
      </div>
    </div>
  );
}

export default MyInput;
