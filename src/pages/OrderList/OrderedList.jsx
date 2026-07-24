import React from "react";
import { useCart } from "../../Contexts/MyContext";
import { useNavigate } from "react-router-dom";
import "./OrderedList.css";

export default function OrderedList() {
  const { cart, address } = useCart();
  const navigate = useNavigate();

  return (
    <div className="ordered_page">
      <h1 className="ordered_title">MY ORDERS</h1>

      {cart.length === 0 ? (
        <div className="no_orders">
          <p>No active orders found.</p>
          <button
            className="order_final_btn"
            onClick={() => navigate("/explore")}
          >
            Go to Explore
          </button>
        </div>
      ) : (
        <div className="order_card">
          <div className="order_header">
            <span>
              Status: <span className="status_tag">Processing</span>
            </span>
            <span>
              Delivery to: <strong>{address || "Not specified"}</strong>
            </span>
          </div>

          <div className="order_items_list">
            {cart.map((item, index) => (
              <div key={index} className="order_item_row">
                <img src={item.images[0]} alt={item.name} />
                <div className="order_item_details">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="order_final_btn"
            onClick={() => navigate("/whereTo")}
          >
            Confirm Order & Choose Location
          </button>

          <div className="order_footer">
            <p>
              We guarantee lightning-fast delivery so your orders always arrive
              right on time.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
