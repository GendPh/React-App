import { useRef, useState } from "react";

interface Car {
  year: number;
  make: string;
  model: string;
}

export default function UpdateArrayObject() {
  const [cars, setCars] = useState<Car[]>([]);
  const [carYear, setCarYear] = useState<number>(new Date().getFullYear());
  const [carMake, setCarMake] = useState<string>("");
  const [carModel, setCarModel] = useState<string>("");

  const makeInputRef = useRef<HTMLInputElement | null>(null);
  const modelInputRef = useRef<HTMLInputElement | null>(null);

  function handleAddCar() {
    if (makeInputRef.current && modelInputRef.current) {
      if (
        makeInputRef.current.value.length > 2 &&
        modelInputRef.current.value.length > 2
      ) {
        const newCar: Car = {
          year: carYear,
          make: carMake,
          model: carModel,
        };

        setCars((prevCars) => [...prevCars, newCar]);

        makeInputRef.current.value = ""; // Use current to access the input element
        modelInputRef.current.value = ""; // Use current to access the input element
      }
    }
  }

  function handleRemoveCar(index: number) {
    setCars((prevCars) => prevCars.filter((_, i) => i !== index));
  }

  function handleYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (value) {
      setCarYear(value);
    }
  }

  function handleMakeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCarMake(e.target.value);
  }

  function handleModelChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCarModel(e.target.value);
  }

  return (
    <div className="text-white p-5">
      <h2>List of Cars</h2>
      {cars.length == 0 && <p>No Cars!</p>}
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} {car.make} {car.model}
            <span
              className="border border-red-500 p-[3px] rounded-lg"
              onClick={() => handleRemoveCar(index)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
      <input
        className="text-black mt-5"
        type="number"
        name=""
        id=""
        value={carYear}
        onChange={handleYearChange}
      />{" "}
      <br />
      <br />
      <input
        ref={makeInputRef}
        className="text-black"
        type="text"
        name=""
        id=""
        onChange={handleMakeChange}
      />{" "}
      <br />
      <br />
      <input
        ref={modelInputRef}
        className="text-black"
        type="text"
        name=""
        id=""
        onChange={handleModelChange}
      />
      <br />
      <br />
      <button
        className="ml-5 border border-black text-center bg-slate-400 px-5 rounded"
        onClick={handleAddCar}
      >
        Add Car
      </button>
    </div>
  );
}
