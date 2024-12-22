import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import axios from "axios";

export default function Learn() {
  const [data, setData] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    findarticle();
  }, []);

  const findarticle = async () => {
    try {
      const response = await axios.get("https://quoteaut.vercel.app/api.json");
      setData(response.data);
      if (response.data.length > 0) {
        setCurrentQuote(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  const getNextQuote = () => {
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setCurrentQuote(data[randomIndex]);
    }
  };

  return (
    <div>
      {currentQuote && (
        <div>
          <h1>{currentQuote.text}</h1>
        </div>
      )}
      <button onClick={getNextQuote}>Get New Quote</button>
    </div>
  );
}
