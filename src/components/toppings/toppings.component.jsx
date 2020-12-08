import React from "react";
import ButtonComponent from "../../global/components/button/button.component";
import imgSrc from "../../assets/images/right-arrow.png";
import "../toppings/toppings.component.css";

export default function ToppingsComponent(props) {
  return (
    <div className="base-content">
      <h3 className="base-title">Step 2: Choose Toppings</h3>
      <hr />
      <BaseItem content="mushrooms"></BaseItem>
      <BaseItem content="peppers"></BaseItem>
      <BaseItem content="onions"></BaseItem>
      <BaseItem content="olives"></BaseItem>
      <BaseItem content="extra cheese"></BaseItem>
      <BaseItem content="tomatoes"></BaseItem>
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
  return (
    <div className="base-option">
      <img alt="right arrow button" className="img-icon" src={imgSrc} />
      <span className="option-name">{props.content}</span>
    </div>
  );
}
