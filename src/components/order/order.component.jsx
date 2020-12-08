import React, { useContext } from "react";
import "../order/order.component.css";
import OrderContext from "../../contexts/order_context/order.context";

export default function OrderComponent(props) {
  const context = useContext(OrderContext);
  console.log("order", context.toppings);
  return (
    <div className="order-content">
      <h3 className="order-header-text">Thank you for your order :) </h3>
      <p className="order-type">You ordered a {context.option} pizza with:</p>
      {/* {console.log("toppings", context.toppings)} */}
      {context.toppings.map((topping) => {
        return (
          <p key={topping} className="order-extras">
            {topping}
          </p>
        );
      })}
    </div>
  );
}
