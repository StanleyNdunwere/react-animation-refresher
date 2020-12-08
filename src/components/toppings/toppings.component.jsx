import React, { useState, useContext } from "react";
import ButtonComponent from "../../global/components/button/button.component";
import imgSrc from "../../assets/images/right-arrow.png";
import "../toppings/toppings.component.css";
import OrderContext from "../../contexts/order_context/order.context";

export default function ToppingsComponent(props) {
  const [state, dispatch] = useContext(OrderContext);

  const updateToppings = (newToppings, dispatch) => {
    dispatch({ type: "UPDATE_TOPPINGS", payload: newToppings })
  }

  let handleClick = (newTopping, updateToppings, oldToppings, dispatch) => {
    if (oldToppings.includes(newTopping)) {
      let newToppingsList = oldToppings.filter((topping) => {
        return topping !== newTopping;
      });
      updateToppings(newToppingsList, dispatch)
    } else {
      updateToppings([...oldToppings, newTopping], dispatch);
    }
  };

  const toppingsOptions = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="base-content">
      <h3 className="base-title">Step 2: Choose Toppings</h3>
      <hr />
      {toppingsOptions.map((topping) => {
        return (
          <BaseItem
            key={topping}
            optionValue={topping}
            clickOption={() => handleClick(topping, updateToppings, state.toppings, dispatch)}
            toppingsList={state.toppings}
          />
        );
      })}
      <br />

      <ButtonComponent
        {...props}
        execFunction={null}
        linkTo="/order"
        content="Next"
      />
    </div>
  );
}

function BaseItem(props) {
  const { optionValue, toppingsList } = { ...props };
  return (
    <div className="base-option" onClick={props.clickOption}>
      {toppingsList.includes(optionValue) ? (
        <img alt="right arrow button" className="img-icon" src={imgSrc} />
      ) : (
          <span></span>
        )}
      <span className="option-name">{props.optionValue}</span>
    </div>
  );
}
