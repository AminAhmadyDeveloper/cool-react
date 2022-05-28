const buttonClassName = "rounded-sm bg-[#61dafb] px-12 py-2 w-full my-2";

function CounterButton({ title, onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {title}
    </button>
  );
}

export default CounterButton;
