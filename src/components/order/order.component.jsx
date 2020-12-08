import React, { useContext } from "react";
import "../order/order.component.css";
import OrderContext from "../../contexts/order_context/order.context";

export default function OrderComponent(props) {
  const [state] = [...useContext(OrderContext)];
  return (
    <div className="order-content">
      <h3 className="order-header-text">Thank you for your order :) </h3>
      <p className="order-type">You ordered a {state.option} pizza with:</p>
      {/* //https://www.sitepoint.com/replace-redux-react-hooks-context-api/ */}
      {state.toppings.map((topping) => {
        return (
          <p key={topping} className="order-extras">
            {topping}
          </p>
        );
      })}
    </div>
  );
}
