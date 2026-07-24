import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CardProvider } from "../src/Contexts/MyContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CardProvider>
  </React.StrictMode>,
);
