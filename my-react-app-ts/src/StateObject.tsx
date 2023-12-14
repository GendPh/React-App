import { useState } from "react";

interface Car {
  year: number;
  make: string;
  model: string;
}

export default function StateObject() {
  const [car, setCar] = useState<Car>({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    setCar((prevCar) => ({ ...prevCar, year: value }));
  }
  function handleMakeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCar((prevCar) => ({ ...prevCar, make: e.target.value }));
  }
  function handleModelChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCar((prevCar) => ({ ...prevCar, model: e.target.value }));
  }

  return (
    <div className="p-5">
      <p className="text-white">
        Your Favorite Car is: {car.year} {car.make} {car.model}
      </p>

      <input
        type="number"
        name="carYear"
        id="carYear"
        onChange={handleYearChange}
        value={car.year}
      />
      <br />
      <br />
      <input
        type="text"
        name="carMake"
        id="carMake"
        value={car.make}
        onChange={handleMakeChange}
      />
      <br />
      <br />
      <input
        type="text"
        name="carModel"
        id="carModel"
        value={car.model}
        onChange={handleModelChange}
      />
      <br />
    </div>
  );
}
