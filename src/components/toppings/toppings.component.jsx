import React, { useContext } from "react";
import ButtonComponent from "../../global/components/button/button.component";
import imgSrc from "../../assets/images/right-arrow.png";
import "../toppings/toppings.component.css";
import OrderContext from "../../contexts/order_context/order.context";
import { motion } from "framer-motion";

export default function ToppingsComponent(props) {
  const [state, dispatch] = useContext(OrderContext);

  const updateToppings = (newToppings, dispatch) => {
    dispatch({ type: "UPDATE_TOPPINGS", payload: newToppings });
  };

  let handleClick = (newTopping, updateToppings, oldToppings, dispatch) => {
    if (oldToppings.includes(newTopping)) {
      let newToppingsList = oldToppings.filter((topping) => {
        return topping !== newTopping;
      });
      updateToppings(newToppingsList, dispatch);
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

  const toppingsContainerVariant = {
    init: {
      x: "-100vw",
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
    // exit: {
    //   x: "100vw",
    //   transition: { ease: "easeInOut", duration: 0.5 },
    // },
  };

  return (
    <motion.div
      variants={toppingsContainerVariant}
      initial="init"
      animate="anim"
      // exit="exit"
      className="base-content"
    >
      <h3 className="base-title">Step 2: Choose Toppings</h3>
      <hr />
      {toppingsOptions.map((topping) => {
        return (
          <BaseItem
            key={topping}
            optionValue={topping}
            clickOption={() =>
              handleClick(topping, updateToppings, state.toppings, dispatch)
            }
            toppingsList={state.toppings}
          />
        );
      })}
      <br />
      {state.toppings.length > 0 ? (
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
            linkTo="/order"
            content="Next"
          />
        </motion.div>
      ) : (
        <span></span>
      )}
    </motion.div>
  );
}

function BaseItem(props) {
  const { optionValue, toppingsList } = { ...props };
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
      {toppingsList.includes(optionValue) ? (
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
