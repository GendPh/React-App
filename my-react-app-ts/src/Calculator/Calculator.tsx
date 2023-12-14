import { useState } from "react";

export default function Calculator() {
  const [startCalc, setStartCalc] = useState<boolean>(false);
  const [displayValue, setDisplayValue] = useState<string>("0");

  function handleAddDisplay(data: string) {
    if (!startCalc) {
      setDisplayValue(data);
      setStartCalc(true);
    } else {
      setDisplayValue((prevValue) => prevValue + data);
    }
  }

  function handleSignalDisplay() {
    const value = Number(displayValue);

    if (value < 0) {
      setDisplayValue(String(Math.abs(value)));
    } else {
      setDisplayValue("-" + String(value));
    }
  }

  function handleClearDisplay() {
    setDisplayValue("0");
    setStartCalc(false);
  }

  function handleResultDisplay() {
    try {
      let result = Number(eval(displayValue)).toFixed(5);

      if (!isFinite(result)) {
        throw new Error("Error");
      }
      
      setDisplayValue(eval(String(result)));
    } catch (error) {
      setStartCalc(false);
      setDisplayValue("Error");
    }
  }

  return (
    <div
      id="Calculator"
      className="max-w-xs mx-auto bg-gray-900 text-white border border-gray-400 mt-10"
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
          <button onClick={handleSignalDisplay}>+/-</button>
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
