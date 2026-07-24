import { useState, useEffect } from "react";
import "./Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    size: "",
    card: "",
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("order_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (data) => {
    setFormData({ ...formData, [data.target.name]: data.target.value });
  };

  const handleSubmit = (data) => {
    data.preventDefault();
    localStorage.setItem("order_user", JSON.stringify(formData));
    setUser(formData);
  };

  const handleReset = () => {
    localStorage.removeItem("order_user");
    setUser(null);
    setFormData({ name: "", surname: "", size: "", card: "" });
  };

  if (user) {
    return (
      <div className="signin profile-card">
        <h2 className="profileCard">Welcome {user.name}!</h2>
        <div className="user-details">
          <p>Surname: {user.surname}</p>
          <p>Size:{user.size}</p>
          <p>Card number:**** **** ****</p>
        </div>
        <button className="reset-btn" onClick={handleReset}>
          Reset account
        </button>
      </div>
    );
  }

  return (
    <div className="signin">
      <h1 className="signin_header">SIGN IN TO MAKE ORDER</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="signin_inp"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="signin_inp"
          name="surname"
          type="text"
          placeholder="Enter your surname"
          required
          value={formData.surname}
          onChange={handleChange}
        />
        <input
          className="signin_inp"
          name="size"
          type="text"
          placeholder="Enter your size"
          required
          value={formData.size}
          onChange={handleChange}
        />
        <input
          className="signin_inp"
          name="card"
          type="number"
          placeholder="Enter your card number"
          required
          value={formData.card}
          onChange={handleChange}
        />
        <button type="submit" className="submit-btn">
          Sign in
        </button>
      </form>
    </div>
  );
}
