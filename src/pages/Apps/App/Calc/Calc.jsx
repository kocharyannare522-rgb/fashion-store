import { useState } from "react";
import "./Calc.css";

export default function Calc() {
  const [display, setDisplay] = useState("");

  function add1(ban) {
    setDisplay(display + ban.target.innerText);
  }
  function equal() {
    try {
      setDisplay(String(eval(display)));
    } catch {
      setDisplay("Error");
    }
  }
  function addDot() {
    setDisplay(display + ".");
  }
  function addOpen() {
    setDisplay(display + "(");
  }
  function addClose() {
    setDisplay(display + ")");
  }
  function square() {
    try {
      setDisplay(String(eval(display) ** 2));
    } catch {
      setDisplay("Error");
    }
  }
  function deleteOne() {
    setDisplay(display.slice(0, -1));
  }
  return (
    <div className="calc_container">
      <div className="display_screen">{display || "0"}</div>
      <div className="buttons_grid">
        <button className="num" onClick={add1}>
          0
        </button>
        <button className="num" onClick={add1}>
          1
        </button>
        <button className="num" onClick={add1}>
          2
        </button>
        <button className="num" onClick={add1}>
          3
        </button>
        <button className="num" onClick={add1}>
          4
        </button>
        <button className="num" onClick={add1}>
          5
        </button>
        <button className="num" onClick={add1}>
          6
        </button>
        <button className="num" onClick={add1}>
          7
        </button>
        <button className="num" onClick={add1}>
          8
        </button>
        <button className="num" onClick={add1}>
          9
        </button>
        <button className="num" onClick={add1}>
          +
        </button>
        <button className="num" onClick={add1}>
          -
        </button>
        <button className="num" onClick={add1}>
          *
        </button>
        <button className="num" onClick={add1}>
          /
        </button>
        <button className="num" onClick={addOpen}>
          (
        </button>
        <button className="num" onClick={addClose}>
          )
        </button>
        <button className="num" onClick={addDot}>
          .
        </button>
        <button className="num" onClick={square}>
          x²
        </button>
        <button className="num" onClick={equal}>
          =
        </button>
        <button className="num" onClick={deleteOne}>
          Del
        </button>
      </div>
    </div>
  );
}
