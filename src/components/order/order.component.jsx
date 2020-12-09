import React, { useContext } from "react";
import "../order/order.component.css";
import OrderContext from "../../contexts/order_context/order.context";
import ButtonComponent from "../../global/components/button/button.component";
import { motion } from "framer-motion";

export default function OrderComponent(props) {
  const orderContainerVariant = {
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
        mass: 0.8,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const childrenVariants = {
    init: {
      opacity: 0,
    },
    anim: {
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  const [state] = [...useContext(OrderContext)];
  return (
    <motion.div
      variants={orderContainerVariant}
      initial="init"
      animate="anim"
      className="order-content"
    >
      <h3 className="order-header-text">Thank you for your order :) </h3>
      <motion.p variants={childrenVariants} className="order-type">
        You ordered a {state.option} pizza with:
      </motion.p>
      {/* //https://www.sitepoint.com/replace-redux-react-hooks-context-api/ */}
      <motion.div variants={childrenVariants}>
        {state.toppings.map((topping) => {
          return (
            <motion.p
              variants={childrenVariants}
              key={topping}
              className="order-extras"
            >
              {topping}
            </motion.p>
          );
        })}
      </motion.div>
      <br></br>
      {state.toppings.length > 0 ? (
        <motion.div
          style={{ textAlign: "center", margin: "auto", width: "fit-content" }}
          initial={{
            x: "-100vw",
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 3.0,
            duration: 1,
            type: "spring",
            stiffness: 70,
          }}
        >
          <ButtonComponent
            {...props}
            execFunction={null}
            linkTo="/"
            content="Order Now"
          />
        </motion.div>
      ) : (
        <span></span>
      )}
    </motion.div>
  );
}
