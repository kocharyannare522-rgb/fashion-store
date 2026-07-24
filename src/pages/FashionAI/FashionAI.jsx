import React, { useState, useEffect } from "react";
import "./FashionAI.css";

export default function FashionAI() {
  const [questionsData, setQuestionsData] = useState([]);
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/JSONS/fashionData.json")
      .then((res) => res.json())
      .then((data) => setQuestionsData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  const handleQuestionClick = (item) => {
    if (loading) return;
    setChat([...chat, { type: "user", text: item.question }]);
    setLoading(true);

    setTimeout(() => {
      setChat((prev) => [...prev, { type: "bot", text: item.answer }]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="chat_container">
      <h1 className="ai_title">FASHION AI STYLIST</h1>
      <div className="chat_window">
        {chat.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="message bot loading">Typing...</div>}
      </div>

      <div className="questions_grid">
        <div className="bubbles_wrapper">
          {questionsData.map((item) => (
            <button
              key={item.id}
              className="q_bubble"
              onClick={() => handleQuestionClick(item)}
              disabled={loading}
            >
              {item.question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
