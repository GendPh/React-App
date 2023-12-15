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
            <span>0000</span> <span>0000</span> <span>0000</span>{" "}
            <span>0000</span>
          </p>

          <p className="font-light text-sm">
            <span>jane appleaseed</span> <span>00/00</span>
          </p>
        </div>
      </div>
    </header>
  );
}
