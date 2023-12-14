import { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState<string>("Guest");
  const [quantity, setQuantity] = useState<number>(1);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function handleQuantityChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Convert the input value to a number
    const value = Number(event.target.value);
    // Check if the conversion is successful
    if (!isNaN(value)) {
      setQuantity(value);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        className="border border-black"
      />
      <p>Name: {name}</p>

      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        className="border border-black"
      />
      <p>Qty: {quantity}</p>
    </div>
  );
}
