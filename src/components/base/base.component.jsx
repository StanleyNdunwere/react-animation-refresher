import React, { useEffect, useState, useContext } from "react";
import ButtonComponent from "../../global/components/button/button.component";
import imgSrc from "../../assets/images/right-arrow.png";
import "../base/base.component.css";
import OrderContext from "../../contexts/order_context/order.context";

export default function BaseComponent(props) {
  const orderContext = useContext(OrderContext);
  const baseOptions = ["Classic", "Thin & Crispy", "Thick Crust"];
  console.log("use context", orderContext);
  const [option, setOption] = useState();

  let handleClick = (value, context) => {
    setOption(value);
    context.option = {...context.option, option: value };
  };

  return (
    <div className="base-content">
      <h3 className="base-title">Step 1: Choose Your Base</h3>
      <hr />
      {baseOptions.map((baseOption) => {
        return (
          <BaseItem
            key={baseOption}
            optionValue={baseOption}
            clickOption={() => handleClick(baseOption, orderContext)}
            currentOption={option}
          />
        );
      })}

      <br />
      <ButtonComponent
        {...props}
        execFunction={null}
        linkTo="/toppings"
        content="Next"
      />
    </div>
  );
}

function BaseItem(props) {
  const { optionValue, currentOption } = { ...props };
  return (
    <div className="base-option" onClick={props.clickOption}>
      {currentOption === optionValue ? (
        <img alt="right arrow button" className="img-icon" src={imgSrc} />
      ) : (
        <span></span>
      )}
      <span className="option-name">{props.optionValue}</span>
    </div>
  );
}
