import { useState } from "react";

export default function Component() {
  const [name, setName] = useState<string>("Guest");
  const [age, setAge] = useState<number>(0);
  const [isEmployed, setIsEmployed] = useState<boolean>(false);

  const updateName = () => {
    setName("Gabriel");
  };
  const incrementAge = () => {
    setAge(age + 2);
  };
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Employed Status</button>
    </div>
  );
}
