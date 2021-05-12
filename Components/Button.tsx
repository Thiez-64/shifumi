interface Iprops {
  input: string;
  onClick?: () => void;
}

function Button({ input, onClick }: Iprops): JSX.Element {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className={`h-10 bg-red-600 border-white rounded-3xl focus:outline-none`}
      >
        <div className={`text-white font-bold px-4`}>{input}</div>
      </button>
    </div>
  );
}

export default Button;
