import { useRef, useState, useEffect } from "react";
import "./Ratings.css";

export default function Ratings() {
  const inpRef = useRef();
  const textRef = useRef();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("items")) || [];
    setReviews(saved);
  }, []);
  function addReview() {
    const name = inpRef.current.value;
    const msg = textRef.current.value;
    if (name.trim() && msg.trim()) {
      const newReview = { name, msg, id: Date.now() };
      const updated = [...reviews, newReview];
      setReviews(updated);
      localStorage.setItem("items", JSON.stringify(updated));
      inpRef.current.value = "";
      textRef.current.value = "";
    }
  }
  return (
    <div className="review">
      <input ref={inpRef} type="text" placeholder="Enter your name" />
      <textarea
        ref={textRef}
        placeholder="Message.."
        className="textarea"
      ></textarea>
      <button onClick={addReview}>Add review</button>
      <div className="results">
        {reviews.map((item) => (
          <div key={item.id} className="review-item">
            <h1>{item.name}</h1>
            <h2>{item.msg}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
