import React, { useState } from "react";
import { useCart } from "../../Contexts/MyContext";
import { useNavigate } from "react-router-dom";
import "./WhereTo.css";

const countriesData = {
  Africa: ["Nigeria", "Egypt", "South Africa", "Morocco", "Kenya"],
  Asia: ["Armenia", "China", "Japan", "India", "South Korea", "UAE"],
  Europe: ["France", "Italy", "Germany", "Spain", "UK", "Netherlands"],
  Americas: ["USA", "Canada", "Mexico", "Brazil", "Argentina"],
  Oceania: ["Australia", "New Zealand", "Fiji"],
};

export default function WhereTo() {
  const { setAddress } = useCart();
  const [selectedContinent, setSelectedContinent] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="where_to_page">
      <h1 className="title">Select Destination</h1>

      <div className="continents_grid">
        {Object.keys(countriesData).map((continent) => (
          <div
            key={continent}
            className={`continent_box ${selectedContinent === continent ? "active_box" : ""}`}
            onClick={() => setSelectedContinent(continent)}
          >
            <span className="continent_name">{continent}</span>
          </div>
        ))}
      </div>
      {selectedContinent && (
        <div className="selection_area">
          <h3>Choose a country in {selectedContinent}</h3>
          <select
            className="country_dropdown"
            onChange={(e) => setAddress(e.target.value)}
          >
            <option value="">Select country</option>
            {countriesData[selectedContinent].map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <button
            className="confirm_location_btn"
            onClick={() => navigate("/orderedList")}
          >
            Confirm and Save Address
          </button>
        </div>
      )}
    </div>
  );
}
