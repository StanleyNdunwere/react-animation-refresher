import React from "react";
import "../order/order.component.css";

export default function OrderComponent(props) {
  return (
    <div className="order-content">
      <h3 className="order-header-text">Thank you for your order :) </h3>
      <p className="order-type">You ordered a Thin & Crispy pizza with:</p>
      <p className="order-extras">peppers</p>
      <p className="order-extras">onions</p>
      <p className="order-extras">Olives</p>
    </div>
  );
}
