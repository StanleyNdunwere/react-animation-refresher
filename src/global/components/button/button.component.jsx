import React from "react";
import "../../../global/components/button/button.css";
import { motion } from "framer-motion";

export default function ButtonComponent(props) {
  const { content } = { ...props };

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
        scale: 1.4,
        boxShadow: "0 0 10px white",
        textShadow: "0 0 10px white",
        transition: { delay: 0, type: "spring", stiffness: 100 },
      }}
      className="button"
      onClick={() => handleClick(props)}
    >
      <span>{content}</span>
    </motion.div>
  );
}
