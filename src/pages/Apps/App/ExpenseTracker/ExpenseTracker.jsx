import { useState } from "react";
import "./ExpenseTracker.css";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = (e) => {
    e.preventDefault();

    setExpenses([
      ...expenses,
      { id: Date.now(), text, amount: parseFloat(amount) },
    ]);
    setText("");
    setAmount("");
  };

  const total = expenses.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="tracker-container">
      <h2 className="tracker_name">Expense Tracker</h2>
      <div className="balance">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
      <form onSubmit={addExpense}>
        <input
          type="text"
          placeholder="Enter expense name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="sbmt" type="submit">
          Add expense
        </button>
      </form>

      <ul className="list">
        {expenses.map((ex) => (
          <li key={ex.id}>
            {ex.text} <span>${ex.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
