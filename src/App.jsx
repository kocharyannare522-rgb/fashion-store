import { useCart } from "./Contexts/MyContext.jsx";
import { WishlistProvider } from "./Contexts/WishlistContext.jsx"; 
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Ratings from "./pages/Ratings/Ratings.jsx";
import Login from "./pages/Auth/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Explore from "./pages/Explore/Explore.jsx";
import WishlistPage from "./pages/WishList/WishList.jsx"; 
import ExploreMoreApps from "./components/ExploreMoreApps/ExploreMoreApps.jsx";
import Calc from "./pages/Apps/App/Calc/Calc.jsx";
import ExpenseTracker from "./pages/Apps/App/ExpenseTracker/ExpenseTracker.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OrderedList from "./pages/OrderList/OrderedList.jsx";
import DailyQuotes from "./pages/Apps/App/DailyQuotes/DailyQuotes.jsx";
import CurrencyConverter from "./pages/Apps/App/CurrencyConverter/CurrencyConverter.jsx";
import SizeAssistant from "./pages/Apps/App/SizeAssistant/SizeAssistant.jsx";
import WhereTo from "./pages/WhereTo/WhereTo.jsx";
import FashionAI from "./pages/FashionAI/FashionAI.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import "./App.css";

export default function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <WishlistProvider>
      <div className={isDark ? "body dark" : "body light"}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/siginin" element={<Login />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/expense" element={<ExpenseTracker />} />
          <Route path="/orderedList" element={<OrderedList />} />
          <Route path="/whereTo" element={<WhereTo />} />
          <Route path="/currency-converter" element={<CurrencyConverter />} />
          <Route path="/size-assistant" element={<SizeAssistant />} />
          <Route path="/daily-quotes" element={<DailyQuotes />} />
          <Route path="/fashion-ai" element={<FashionAI />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ExploreMoreApps />
        <Footer />
      </div>
    </WishlistProvider>
  );
}