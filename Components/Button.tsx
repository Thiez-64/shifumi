import styles from "../styles/Home.module.css";

interface Iprops {
  input: string;
}

function Button({ input }: Iprops) {
  return (
    <button className="w-60 h-40 bg-red-600">
      <div className="text-white font-bold">{input}</div>
    </button>
  );
}

export default Button;
