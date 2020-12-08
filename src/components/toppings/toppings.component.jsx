import React, { useState } from "react";
import ButtonComponent from "../../global/components/button/button.component";
import imgSrc from "../../assets/images/right-arrow.png";
import "../toppings/toppings.component.css";
import OrderContext from "../../contexts/order_context/order.context";

export default function ToppingsComponent(props) {
  const [toppingValue, setToppingValue] = useState([]);

  let handleClick = (value, toppingValue, Context) => {
    if (toppingValue.includes(value)) {
      let newToppingsList = toppingValue.filter((topping) => {
        return topping !== value;
      });
      setToppingValue(newToppingsList);
      Context.value = { ...Context.value, toppings: newToppingsList };
    } else {
      setToppingValue([...toppingValue, value]);
      Context.value = { ...Context.value, toppings: [...toppingValue, value] };
    }
    // console.log(Context);
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
            clickOption={() => handleClick(topping, toppingValue, OrderContext)}
            toppingsList={toppingValue}
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
