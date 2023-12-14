import { useState } from "react";

export default function ColorPick() {
  const [color, setColor] = useState<string>("#ffffff");

  function handleColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    setColor(e.target.value);
  }

  return (
    <div className="color-picker-container text-center max-w-2xl mx-auto text-white">
      <h1 className="text-4xl ">Color Picker</h1>

      <div className="color-display">
        <div
          style={{ backgroundColor: color }}
          className="aspect-video relative my-5"
        >
          <div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] bg-slate-600 flex justify-center items-center gap-3 p-5 rounded-xl text-xl">
            <label htmlFor="color">Select a Color:</label>
            <input
              type="color"
              name="color"
              id="color"
              value={color}
              onChange={handleColorChange}
              className="bg-transparent"
            />
          </div>
        </div>
        <p className="text-xl">
          Selected Color: <b>{color}</b>
        </p>
      </div>
    </div>
  );
}
