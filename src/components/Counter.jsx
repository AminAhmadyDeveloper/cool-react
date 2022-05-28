import { useDispatch } from "react-redux";
import { increment, decrement, amount } from "../stores/counterStore";
import CounterButton from "./CounterButton";

const containerClassName = "flex flex-col items-center bg";
const inputClassName = "border-[#61dafb] border-2 rounded-sm my-2";

function Counter() {
  const dispatch = useDispatch();

  return (
    <div className={containerClassName}>
      <input
        className={inputClassName}
        onChange={(amountInput) => onAmountChange(amountInput, dispatch)}
      />
      <CounterButton title="Increase" onClick={() => dispatch(increment())} />
      <CounterButton title="Decrease" onClick={() => dispatch(decrement())} />
    </div>
  );
}

function onAmountChange(amountInput, dispatch) {
  return isNaN(parseInt(amountInput.target.value))
    ? dispatch(amount(0))
    : dispatch(amount(parseInt(amountInput.target.value)));
}

export default Counter;
