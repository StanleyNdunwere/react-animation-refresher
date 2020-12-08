import React from "react";
import ButtonComponent from "../../global/components/button/button.component";
import imgSrc from "../../assets/images/right-arrow.png";
import "../base/base.component.css";
import { render } from "@testing-library/react";

export default function BaseComponent(props) {
  return (
    <div className="base-content">
      <h3 className="base-title">Step 1: Choose Your Base</h3>
      <hr />
      <BaseItem content="Classic"></BaseItem>
      <BaseItem content="Thin & Crispy"></BaseItem>
      <BaseItem content="Thick Crust"></BaseItem>
      <br />
      <ButtonComponent
        {...props}
        execFunction={null}
        linkTo="/"
        content="Next"
      />
    </div>
  );
}

function BaseItem(props) {
  return (
    <div className="base-option">
      <img className="img-icon" src={imgSrc} />
      <span className="option-name">{props.content}</span>
    </div>
  );
}
