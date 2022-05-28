import reactLogo from "./../assets/svgs/ReactLogo.svg";
import { useSelector } from "react-redux";
import Counter from "../components/Counter";

const containerClassName = "flex flex-col items-center";
const logoClassName = "max-h-64 animate-spin-slow";
const h1ClassName = "text-2xl font-bold mb-5";
const pClassName = "text-md mb-2";

function CounterPage() {
  return (
    <div className={containerClassName}>
      <img src={reactLogo} alt="react-logo" className={logoClassName} />
      <h1 className={h1ClassName}>React + Redux + Tailwind</h1>
      <p className={pClassName}>Click on buttons to change counter</p>
      <p className={pClassName}>
        enter your number in text box to chabge increasment amount
      </p>
      <h1 className={h1ClassName}>
        {useSelector((state) => state.counter.counterValue)}
      </h1>
      <Counter />
    </div>
  );
}

export default CounterPage;
