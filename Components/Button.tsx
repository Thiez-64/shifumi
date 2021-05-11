interface Iprops {
  input: string;
}

function Button({ input }: Iprops) {
  return (
    <button className="w-40 h-40 bg-red">
      <div>{input}</div>
    </button>
  );
}

export default Button;
