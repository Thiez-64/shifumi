interface Iprops {
  input: string;
}

function Button({ input }: Iprops) {
  return (
    <button className="">
      <div>{input}</div>
    </button>
  );
}

export default Button;
