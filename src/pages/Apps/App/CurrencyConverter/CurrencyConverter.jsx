import React, { useState, useEffect } from "react";
import "./CurrencyConverter.css";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("AMD");
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(0);

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        setResult((amount * data.rates[toCurrency]).toFixed(2));
      })
      .catch((err) => console.error("Error fetching rates:", err));
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="converter_box">
      <h3>Currency Converter</h3>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />

      <div className="currency_selectors">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(rates).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(rates).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="convert_res">
        {amount} {fromCurrency} ={" "}
        <span>
          {result} {toCurrency}
        </span>
      </div>
    </div>
  );
}
