import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="count-container text-center text-white p-5">
      <p className="text-5xl mb-5">{count}</p>

      <button onClick={decrement}>Reduce</button>
      <button onClick={reset}>Restart</button>
      <button onClick={increment}>Add</button>
    </div>
  );
}
