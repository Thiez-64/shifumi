import Image from "next/image";

function Users(): JSX.Element {
  return (
    <div className="flex items-center">
      <div className="flex justify-center w-12 h-12 bg-indigo-500 rounded-full">
        <Image
          className="bg-center"
          src="/Bear.svg"
          alt=""
          width={40}
          height={40}
        />
      </div>
      <p className="flex ml-2 text-center">Jean-Nemar</p>
    </div>
  );
}

export default Users;
