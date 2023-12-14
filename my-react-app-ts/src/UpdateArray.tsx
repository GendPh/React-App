import { useRef, useState } from "react";
import List from "./List";

export default function UpdateArray() {
  const [foods, setFoods] = useState<string[]>(["apple", "Orange", "Banana"]);
  const foodInputRef = useRef<HTMLInputElement | null>(null);

  const handleAddFood = () => {
    const newFood = foodInputRef.current?.value;

    if (newFood) {
      setFoods((prevFoods) => [...prevFoods, newFood]);
      // You can also clear the input value if needed
      if (foodInputRef.current) {
        foodInputRef.current.value = "";
      }
    }
  };

  function handleRemoveFood(index: number) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div className="text-white p-5">
      <h2>List of Foods</h2>
      <ul className="px-5 mt-5">
        {foods.map((food, index) => (
          <li className="mb-3" key={index}>
            {food}{" "}
            <span
              className="border border-red-500 p-[3px] rounded-lg"
              onClick={() => handleRemoveFood(index)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        ref={foodInputRef}
        placeholder="Enter Food Name"
        className="text-black mt-5"
      />
      <button
        className="ml-5 border border-black text-center bg-slate-400 px-5 rounded"
        onClick={handleAddFood}
      >
        Add Food
      </button>
    </div>
  );
}
