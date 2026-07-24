import React, { useState } from "react";
import "./SizeAssistant.css";

export default function SizeAssistant() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const h = Number(height);
    const w = Number(weight);

    if (!h || !w) {
      setResult("Please fill all fields!");
      return;
    }

    if (w < 50 && h < 160) {
      setResult("Your size is XS");
    } else if (w < 65 && h < 175) {
      setResult("Your size is S");
    } else if (w < 80 && h < 185) {
      setResult("Your size is M");
    } else if (w < 95 && h < 195) {
      setResult("Your size is L");
    } else if (w < 110 && h < 205) {
      setResult("Your size is XL");
    } else {
      setResult("Your size is XXL");
    }
  };

  return (
    <div className="size_box">
      <h3>SIZE ASSISTANT</h3>
      <input
        type="number"
        placeholder="Height (cm)"
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result && <p className="res_text">{result}</p>}
    </div>
  );
}
