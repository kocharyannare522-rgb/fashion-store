import React, { useState, useEffect } from "react";
import "./DailyQuotes.css";

const quotes = [
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  { text: "Fashion changes, but style endures.", author: "Coco Chanel" },
  {
    text: "Style is a way to say who you are without having to speak.",
    author: "Rachel Zoe",
  },
  {
    text: "Fashion is the armor to survive the reality of everyday life.",
    author: "Bill Cunningham",
  },
  {
    text: "To be irreplaceable one must always be different.",
    author: "Coco Chanel",
  },
  {
    text: "Fashion is what you're offered four times a year by designers. Style is what you choose.",
    author: "Lauren Hutton",
  },
  {
    text: "Clothes mean nothing until someone lives in them.",
    author: "Marc Jacobs",
  },
  {
    text: "Elegance is the only beauty that never fades.",
    author: "Audrey Hepburn",
  },
  {
    text: "Don't be into trends. Don't make fashion own you, but you decide what you are.",
    author: "Gianni Versace",
  },
  { text: "The joy of dressing is an art.", author: "John Galliano" },
  {
    text: "Style is knowing who you are, what you want to say, and not giving a damn.",
    author: "Orson Welles",
  },
  {
    text: "Beauty begins the moment you decide to be yourself.",
    author: "Coco Chanel",
  },
];

export default function DailyQuotes() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="quote_card">
      <p>"{quote.text}"</p>
      <span>- {quote.author}</span>
      <button onClick={getRandomQuote}>New Quote</button>
    </div>
  );
}
