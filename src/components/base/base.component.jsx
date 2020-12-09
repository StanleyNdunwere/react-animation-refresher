import React, { useState, useContext } from "react";
import ButtonComponent from "../../global/components/button/button.component";
import imgSrc from "../../assets/images/right-arrow.png";
import "../base/base.component.css";
import OrderContext from "../../contexts/order_context/order.context";
import { motion } from "framer-motion";

export default function BaseComponent(props) {
  const baseContainerVariant = {
    init: {
      x: "-100vw",
    },
    anim: {
      x: 0,
      transition: {
        delay: 0.5,
        duration: 1,
        type: "spring",
        stiffness: 70,
      },
    },
    // exit: {
    //   x: "100vw",
    //   transition: { ease: "easeInOut", duration: 0.5 },
    // },
  };

  const buttonVariant = {
    init: {
      x: "-100vw",
      transition: {
        delay: 0.0,
        duration: 1,
        type: "spring",
        stiffness: 70,
      },
    },
    anim: {
      x: 0,
      transition: {
        delay: 0.0,
        duration: 1,
        type: "spring",
        stiffness: 70,
      },
    },
  };

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
        variants={baseContainerVariant}
        initial="init"
        animate="anim"
        // exit="exit"
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
          <motion.div variants={buttonVariant} initial="init" animate="anim">
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
    <motion.div
      whileHover={{
        scale: 1.3,
        originX: 0,
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="base-option"
      onClick={props.clickOption}
    >
      {currentOption === optionValue ? (
        <img alt="right arrow button" className="img-icon" src={imgSrc} />
      ) : (
        <span></span>
      )}
      <motion.span
        whileHover={{
          color: "gold",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="option-name"
      >
        {props.optionValue}
      </motion.span>
    </motion.div>
  );
}
