export default function Header() {
  return (
    <header className="p-5 pb-0">
      <div className="card back">
        <p className="cvc-value">000</p>
      </div>

      <div className="card front">
        <div className="flex items-center gap-3">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="text-area">
          <p>
            <span className="card-number">0000</span>
            <span className="card-number">0000</span>
            <span className="card-number">0000</span>
            <span className="card-number">0000</span>
          </p>

          <p className="font-light text-sm">
            <span id="card-name">jane appleaseed</span>{" "}
            <span>
              <span className="card-month">00</span>/
              <span className="card-year">00</span>
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
