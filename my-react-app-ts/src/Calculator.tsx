import { useState } from "react";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [startCalc, setStartCalc] = useState<boolean>(false);
  const [signal, setSignal] = useState<boolean>(false);

  function handleAddDisplay(data: string) {
    if (!startCalc) {
      setDisplayValue(data);
      setStartCalc(true);
    } else {
      setDisplayValue((prevValue) => prevValue + data);
    }
  }

  function handleClearDisplay() {
    setDisplayValue(" ");
  }

  function handleResultDisplay() {
    try {
      setDisplayValue(eval(displayValue));
    } catch (error) {
      setDisplayValue("Error");
    }
  }

  function handleSinDisplay() {
    const value = Number(displayValue);
    if (value < 0) {
      setDisplayValue((prevValue) => String(Math.abs(value)));
    }
  }

  return (
    <div
      id="Calculator"
      className="max-w-sm mx-auto bg-gray-900 text-white border border-gray-400 mt-10"
    >
      <input
        id="display"
        value={displayValue}
        readOnly
        className="w-full text-end bg-transparent text-4xl p-2"
      />
      <div className="keys">
        <div className="row">
          <button onClick={handleClearDisplay} className="col-span-2">
            AC
          </button>
          <button>+/-</button>
          <button onClick={() => handleAddDisplay("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleAddDisplay("7")}>7</button>
          <button onClick={() => handleAddDisplay("8")}>8</button>
          <button onClick={() => handleAddDisplay("9")}>9</button>
          <button onClick={() => handleAddDisplay("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleAddDisplay("4")}>4</button>
          <button onClick={() => handleAddDisplay("5")}>5</button>
          <button onClick={() => handleAddDisplay("6")}>6</button>
          <button onClick={() => handleAddDisplay("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleAddDisplay("1")}>1</button>
          <button onClick={() => handleAddDisplay("2")}>2</button>
          <button onClick={() => handleAddDisplay("3")}>3</button>
          <button onClick={() => handleAddDisplay("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleAddDisplay("0")} className="col-span-2">
            0
          </button>
          <button onClick={() => handleAddDisplay(".")}>.</button>
          <button onClick={handleResultDisplay}>=</button>
        </div>
      </div>
    </div>
  );
}
