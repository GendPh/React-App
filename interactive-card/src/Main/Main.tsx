import ConfirmIcon from "../assets/icon-complete.svg";
import { useRef, useState } from "react";
import Gsap from "gsap";

export default function Main() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const numberInputRef = useRef<HTMLInputElement | null>(null);
  const monthInputRef = useRef<HTMLInputElement | null>(null);
  const yearInputRef = useRef<HTMLInputElement | null>(null);
  const cvcInputRef = useRef<HTMLInputElement | null>(null);
  const successEl = useRef<HTMLDivElement | null>(null);
  const confirmIconEl = useRef<HTMLImageElement | null>(null);

  const [wrongNameInput, setWrongNameInput] = useState<boolean>(true);
  const [wrongNumberInput, setWrongNumberInput] = useState<boolean>(true);
  const [wrongMonthInput, setWrongMonthInput] = useState<boolean>(true);
  const [wrongYearInput, setWrongYearInput] = useState<boolean>(true);
  const [wrongCvcInput, setWrongCvcInput] = useState<boolean>(true);

  const [nameError, setNameError] = useState<string>("");
  const [numberError, setNumberError] = useState<string>("");
  const [dateError, setDateError] = useState<string>("");
  const [cvcError, setCvcError] = useState<string>("");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const nameEl = document.querySelector("#card-name");

    if (nameEl) {
      if (value.length !== 0) {
        nameEl.textContent = value;
        setWrongNameInput(false);
        setNameError("");
      } else {
        nameEl.textContent = "Jane Appleseed";
        setWrongNameInput(true);
        setNameError("Please insert a name.");
      }
    }
  }

  function handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const cardNumberEl = document.querySelectorAll(".card-number");

    let splitValue;

    if (cardNumberEl) {
      if (value.length < 17) {
        if (value.length > 0) {
          splitValue = value.slice(0, 4);
          cardNumberEl[0].textContent = splitValue;
        } else {
          cardNumberEl[0].textContent = "0000";
        }

        if (value.length > 4) {
          splitValue = value.slice(4, 8);
          cardNumberEl[1].textContent = splitValue;
        } else {
          cardNumberEl[1].textContent = "0000";
        }

        if (value.length > 8) {
          splitValue = value.slice(8, 12);
          cardNumberEl[2].textContent = splitValue;
        } else {
          cardNumberEl[2].textContent = "0000";
        }

        if (value.length > 12) {
          splitValue = value.slice(12, 16);
          cardNumberEl[3].textContent = splitValue;
        } else {
          cardNumberEl[3].textContent = "0000";
        }

        setWrongNumberInput(true);
        setNumberError("");
      } else if (value.length > 16) {
        splitValue = value.slice(0, 16);
        e.target.value = splitValue;
        setWrongNumberInput(false);
      }
    }
  }

  function handleDateMonthChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    let numberValue = parseInt(value, 10);
    const cardMonthEl = document.querySelector(".card-month");

    if (cardMonthEl) {
      if (value.length == 1) {
        cardMonthEl.textContent = "0" + value;
      } else if (value.length == 2) {
        cardMonthEl.textContent = value;
      } else if (value.length > 2) {
        let slice = value.slice(0, 2);
        e.target.value = slice;
        numberValue = parseInt(slice, 10);
      }

      setWrongMonthInput(numberValue < 13 ? false : true);
    }
  }

  function handleDateYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const cardYearEl = document.querySelector(".card-year");

    if (cardYearEl) {
      if (value.length < 2) {
        cardYearEl.textContent = "0" + value;
        setWrongYearInput(true);
      } else if (value.length < 3) {
        cardYearEl.textContent = value;
        setWrongYearInput(false);
      } else if (value.length > 2) {
        let slice = value.slice(0, 2);
        e.target.value = slice;
      }
    }
  }

  function handleCvcChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    const cardCvcEl = document.querySelector(".cvc-value");

    if (cardCvcEl) {
      if (value.length == 0) {
        cardCvcEl.textContent = "000";
      } else if (value.length == 1) {
        cardCvcEl.textContent = value + "00";
      } else if (value.length == 2) {
        cardCvcEl.textContent = value + "0";
      } else if (value.length == 3) {
        cardCvcEl.textContent = value;
      } else if (value.length > 3) {
        let slice = value.slice(0, 3);
        e.target.value = slice;
        value = slice;
      }
    }

    setWrongCvcInput(value.length > 0 && value.length == 3 ? false : true);
  }

  function handleCardInformation(e: React.FormEvent) {
    e.preventDefault();

    if (wrongNameInput) {
      nameInputRef.current?.classList.add("wrong-input");
      setNameError("Please insert a name.");
    } else {
      nameInputRef.current?.classList.remove("wrong-input");
      setNameError("");
    }

    if (wrongNumberInput) {
      numberInputRef.current?.classList.add("wrong-input");
      setNumberError("Please insert a valid number.");
    } else {
      numberInputRef.current?.classList.remove("wrong-input");
      setNumberError("");
    }

    if (wrongMonthInput && wrongYearInput) {
      monthInputRef.current?.classList.add("wrong-input");
      yearInputRef.current?.classList.add("wrong-input");
      setDateError("Valid Month and Year (MM/YY).");
    } else if (wrongMonthInput && !wrongYearInput) {
      monthInputRef.current?.classList.add("wrong-input");
      setDateError("Valid Month (MM).");
    } else if (!wrongMonthInput && wrongYearInput) {
      yearInputRef.current?.classList.add("wrong-input");
      setDateError("Valid Year (YY).");
    } else {
      monthInputRef.current?.classList.remove("wrong-input");
      yearInputRef.current?.classList.remove("wrong-input");
      setDateError("");
    }

    if (wrongCvcInput) {
      cvcInputRef.current?.classList.add("wrong-input");
      setCvcError("Valid Cvc(000).");
    } else {
      cvcInputRef.current?.classList.remove("wrong-input");
      setCvcError("");
    }

    if (
      !wrongNameInput &&
      !wrongNumberInput &&
      !wrongMonthInput &&
      !wrongYearInput &&
      !wrongCvcInput
    ) {
      if (formRef.current) {
        formRef.current.classList.toggle("flex");
        formRef.current.classList.toggle("hidden");
      }

      let successElement = successEl.current;
      let successImgEl = confirmIconEl.current;

      if (successElement && successImgEl) {
        successElement.classList.toggle("hidden");

        Gsap.fromTo(
          successElement,
          { opacity: 0 },
          { opacity: 1, duration: 1.3 }
        );

        Gsap.fromTo(
          successImgEl,
          { rotateX: 0, rotateY: 0 },
          { rotateX: 360, rotateY: 360, duration: 1 }
        );
      }
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
        <label htmlFor="form-name">cardholder name</label>
        <input
          ref={nameInputRef}
          type="text"
          name="form-name"
          id="form-name"
          placeholder="e.g. Jane Appleseed"
          onChange={handleNameChange}
        />
        {wrongNameInput && (
          <p className="text-sm text-red-700 mb-4 normal-case">{nameError}</p>
        )}

        <label htmlFor="form-number">card number</label>
        <input
          ref={numberInputRef}
          type="number"
          name="form-number"
          id="form-number"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleNumberChange}
        />
        {wrongNumberInput && (
          <p className="text-sm text-red-700 mb-4 normal-case">{numberError}</p>
        )}

        <div className="flex items-start gap-3">
          <div className="date">
            <p>exp. date (mm/yy)</p>
            <div className="flex items-center justify-between gap-3">
              <input
                ref={monthInputRef}
                type="number"
                name="form-month"
                id="form-month"
                placeholder="MM"
                min={1}
                max={12}
                onChange={handleDateMonthChange}
              />
              <input
                ref={yearInputRef}
                type="number"
                name="form-year"
                id="form-year"
                placeholder="YY"
                maxLength={2}
                onChange={handleDateYearChange}
              />
            </div>
            <p className="text-sm text-red-700 mb-4 normal-case">{dateError}</p>
          </div>
          <div className="cvc">
            <label htmlFor="form-cvc">cvc</label>
            <input
              ref={cvcInputRef}
              type="number"
              name="form-cvc"
              id="form-cvc"
              placeholder="e.g. 123"
              onChange={handleCvcChange}
            />
            {wrongCvcInput && (
              <p className="text-sm text-red-700 mb-4 normal-case">
                {cvcError}
              </p>
            )}
          </div>
        </div>

        <button
          onClick={handleCardInformation}
          /* className={!wrongNameInput ? "opacity-60 pointer-events-none" : ""} */
        >
          Confirm
        </button>
      </form>

      <div className="text-center hidden" ref={successEl}>
        <img
          src={ConfirmIcon}
          ref={confirmIconEl}
          alt="confirm icon"
          className="mx-auto"
        />
        <h2 className="text-4xl uppercase my-5">thank you!</h2>
        <h3 className="mb-5 text-dark-grayish-violet">
          We've added your card details
        </h3>
        <button onClick={() => window.location.reload()}>Continue</button>
      </div>
    </main>
  );
}
