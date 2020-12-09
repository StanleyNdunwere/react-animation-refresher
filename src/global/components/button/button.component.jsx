import React from "react";
import "../../../global/components/button/button.css";
import { motion } from "framer-motion";

export default function ButtonComponent(props) {
  const { content } = { ...props };
  const performScale = props.performScale ?? true;
  const scale = performScale ? { scale: 1.4 } : {};

  let handleClick = (props) => {
    const { history, execFunction, linkTo } = { ...props };
    if (execFunction !== null) {
      execFunction();
    }
    history.push(linkTo);
  };

  return (
    <motion.div
      whileHover={{
        ...scale,
        boxShadow: "0 0 10px white",
        textShadow: "0 0 10px white",
      }}
      transition={{ delay: 0, duration: 1.5, type: "spring", stiffness: 100 }}
      className="button"
      onClick={() => handleClick(props)}
    >
      <span>{content}</span>
    </motion.div>
  );
}
