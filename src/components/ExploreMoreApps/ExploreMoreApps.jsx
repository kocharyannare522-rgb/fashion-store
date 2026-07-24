import { Link } from "react-router-dom";
import "./ExploreMoreApps.css";

export default function ExploreMoreApps() {
  return (
    <div>
      <h1 className="exploremore_heading">Explore more apps</h1>
      <div className="nav_buttons">
        <Link to="/calc">
          <button className="app_button">Calculator</button>
        </Link>
        <Link to="/expense">
          <button className="app_button">Expense Tracker</button>
        </Link>
        <Link to="/size-assistant">
          <button className="app_button">Size Assistant</button>
        </Link>
        <Link to="/currency-converter">
          <button className="app_button">Currency Converter</button>
        </Link>
        <Link to="/daily-quotes">
          <button className="app_button">Daily Quotes</button>
        </Link>
      </div>
    </div>
  );
}
