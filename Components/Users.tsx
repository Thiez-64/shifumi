import Image from "next/image";

interface Iprops {
  name: string;
  img: string;
  color: string;
}

function Users({ name, img, color }: Iprops): JSX.Element {
  return (
    <div className="flex items-center p-1 mx-auto my-6 bg-white rounded-full w-max">
      <div className={`flex justify-center w-16 h-16 ${color} rounded-full`}>
        <Image className="bg-center" src={img} alt="" width={40} height={40} />
      </div>
      <p className="flex ml-2 text-3xl font-bold text-center">{name}</p>
      <p className="flex ml-2 text-center"></p>
    </div>
  );
}

export default Users;
