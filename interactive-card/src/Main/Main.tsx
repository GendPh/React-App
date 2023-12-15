import ConfirmIcon from "../assets/icon-complete.svg";
import { useEffect, useRef, useState } from "react";

export default function Main() {
  const [wrongNumberInput, setWrongNumberInput] = useState<boolean>(false);
  const [wrongDateInput, setWrongDateInput] = useState<boolean>(false);
  const [wrongCvcInput, setWrongCvcInput] = useState<boolean>(false);
  const [wrongCvcError, setWrongCvcError] = useState<string>("");

  const formRef = useRef<HTMLFormElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  function handleCvcChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const element = document.querySelector(".cvc-value");
    const input = document.querySelector("#cvc");

    if (value.length < 4) {
      if (element) {
        if (value.length == 0) {
          element.textContent = "000";
        } else if (value.length == 1) {
          element.textContent = value + "00";
        } else if (value.length == 2) {
          element.textContent = value + "0";
        } else if (value.length == 3) {
          element.textContent = value;
        }
      }
      input?.classList.remove("wrong-input");
      setWrongCvcInput(false);
    } else {
      input?.classList.add("wrong-input");
      setWrongCvcError("Value must contain three elements");
      setWrongCvcInput(true);
    }
  }

  function handleCardInformation(e: React.FormEvent) {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.classList.toggle("flex");
      formRef.current.classList.toggle("hidden");
    }
    if (divRef.current) {
      divRef.current.classList.toggle("hidden");
    }
  }

  function handleContinue() {
    if (formRef.current) {
      formRef.current.classList.toggle("hidden");
      formRef.current.classList.toggle("flex");
    }
    if (divRef.current) {
      divRef.current.classList.toggle("hidden");
    }
  }

  return (
    <main className="translate-y-[-10%] md:translate-y-[0]">
      <form
        ref={formRef}
        action="#"
        method="post"
        className="flex-col justify-stretch flex"
      >
        <label htmlFor="name">cardholder name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Jane Appleseed"
        />
        <label htmlFor="number">card number</label>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="e.g. 1234 5678 9123 0000"
          className="wrong-input"
        />
        {!wrongNumberInput && (
          <p className="text-sm text-red-700 mb-4 normal-case">
            "Wrong Format, numbers only"
          </p>
        )}

        <div className="flex items-start gap-3">
          <div className="date">
            <p>exp. date (mm/yy)</p>
            <div className="flex items-center justify-between gap-3">
              <input
                type="number"
                name="month"
                id="month"
                placeholder="MM"
                maxLength={2}
                min={1}
                max={12}
              />
              <input
                type="number"
                name="year"
                id="year"
                placeholder="YY"
                maxLength={2}
                className="wrong-input"
              />
            </div>
            {!wrongDateInput && (
              <p className="text-sm text-red-700 mb-4 normal-case">
                Can't be blank
              </p>
            )}
          </div>
          <div className="cvc">
            <label htmlFor="cvc">cvc</label>
            <input
              type="number"
              name="cvc"
              id="cvc"
              placeholder="e.g. 123"
              onChange={handleCvcChange}
            />
            {wrongCvcInput && (
              <p className="text-sm text-red-700 mb-4 normal-case">
                {wrongCvcError}
              </p>
            )}
          </div>
        </div>

        <button onClick={handleCardInformation}>Confirm</button>
      </form>

      <div className="text-center hidden" ref={divRef}>
        <img src={ConfirmIcon} alt="confirm icon" className="mx-auto" />
        <h2 className="text-4xl uppercase my-5">thank you!</h2>
        <h3 className="mb-5 text-dark-grayish-violet">
          We've added your card details
        </h3>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </main>
  );
}
