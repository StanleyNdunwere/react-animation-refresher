import React, { useState, useContext } from "react";
import ButtonComponent from "../../global/components/button/button.component";
import imgSrc from "../../assets/images/right-arrow.png";
import "../base/base.component.css";
import OrderContext from "../../contexts/order_context/order.context";
import { motion } from "framer-motion";

export default function BaseComponent(props) {
  const [state, dispatch] = useContext(OrderContext);
  const baseOptions = ["Classic", "Thin & Crispy", "Thick Crust"];

  const [option, setOption] = useState();

  const updateAction = (option, dispatch) => {
    dispatch({ type: "UPDATE_ACTION", payload: option });
  };

  let handleClick = (value, dispatch, updateAction) => {
    setOption(value);
    updateAction(value, dispatch);
  };

  return (
    <div className="base-content-container">
      <motion.div
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          delay: 0.0,
          duration: 1,
          type: "spring",
          stiffness: 70,
        }}
        className="base-content"
      >
        <h3 className="base-title">Step 1: Choose Your Base</h3>
        <hr />
        {baseOptions.map((baseOption) => {
          return (
            <BaseItem
              key={baseOption}
              optionValue={baseOption}
              clickOption={() =>
                handleClick(baseOption, dispatch, updateAction)
              }
              currentOption={option}
            />
          );
        })}

        <br />
        {state.option != "" ? (
          <motion.div
            initial={{
              x: "-100vw",
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: 0.0,
              duration: 1,
              type: "spring",
              stiffness: 70,
            }}
          >
            <ButtonComponent
              {...props}
              execFunction={null}
              linkTo="/toppings"
              content="Next"
            />
          </motion.div>
        ) : (
          <span></span>
        )}
      </motion.div>
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
