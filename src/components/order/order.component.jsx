import React from "react";
import "../order/order.component.css";
import OrderContext from "../../contexts/order_context/order.context";

export default function OrderComponent(props) {
  return (
    <div className="order-content">
      <h3 className="order-header-text">Thank you for your order :) </h3>
      <p className="order-type">
        You ordered a {OrderContext.value.option} pizza with:
      </p>
      {OrderContext.value.toppings.map((topping) => {
        return (
          <p key={topping} className="order-extras">
            {topping}
          </p>
        );
      })}
    </div>
  );
}
