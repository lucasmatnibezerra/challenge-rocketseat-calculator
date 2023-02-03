import "./App.css";
import { useState } from "react";
import Equal from "./images/Equals.svg";

function App() {
  const [history, setHistory] = useState([]);
  const [current, setCurrent] = useState("");

  const numbersCol1 = [9, 8, 7];
  const numbersCol2 = [6, 5, 4];
  const numbersCol3 = [3, 2, 1];

  const handleClick = (e) => {
    setCurrent(current + e.target.value);
  };

  const calculate = () => {
    setHistory([current]);
    setCurrent(eval(current).toString());
  };

  const clear = () => {
    setCurrent("");
  };

  const clearEntry = () => {
    setCurrent(current.slice(0, -1));
  };

  const calculatePercentage = () => {
    setCurrent(eval(current / 100).toString());
  };

  const addComma = () => {
    setCurrent(current + ".");
  };

  const toggleSign = () => {
    setCurrent(current[0] === "-" ? current.slice(1) : `-${current}`);
  };

  return (
    <div className=" h-[100vh] flex justify-center items-center  ">
      <div className="flex-col flex justify-center items-center w-[356px] h-[566px] rounded-[48px] box-border backgroundCalc ">
        <div className="w-[270px] text-right font-rubik text-[20px] font-[28px] text-[#6B6B6B]">
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <img src={Equal} alt="Equal" />
          <input
            className="text-right bg-transparent outline-none w-[240px] h-[50px] text-white text-[36px]  "
            value={current}
            readOnly
          />
        </div>
        <div className="flex-col font-rubik text-[24px] text-white ">
          <div className=" space-x-4 m-[12px]">
            <button className="text-[#975DFA]" value="CE" onClick={clearEntry}>
              CE
            </button>

            <button value="C" onClick={clear}>
              C
            </button>
            <button value="%" onClick={calculatePercentage}>
              %
            </button>
            <button className="operator" value="/" onClick={handleClick}>
              ÷
            </button>
          </div>
          <div className="space-x-4 m-[12px]">
            {numbersCol1.map((number) => (
              <button key={number} value={number} onClick={handleClick}>
                {number}
              </button>
            ))}
            <button className="operator" value="*" onClick={handleClick}>
              x
            </button>
          </div>

          <div className="space-x-4 m-[12px]">
            {numbersCol2.map((number) => (
              <button key={number} value={number} onClick={handleClick}>
                {number}
              </button>
            ))}
            <button className="operator" value="-" onClick={handleClick}>
              -
            </button>
          </div>
          <div className="space-x-4 m-[12px]">
            {numbersCol3.map((number) => (
              <button key={numbersCol3} value={number} onClick={handleClick}>
                {number}
              </button>
            ))}

            <button className="operator" value="+" onClick={handleClick}>
              +
            </button>
          </div>
          <div className="space-x-4 m-[12px]">
            <button value="±" onClick={toggleSign}>
              ±
            </button>
            <button value="0" onClick={handleClick}>
              0
            </button>
            <button onClick={addComma}>,</button>
            <button className="equal" value="=" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
