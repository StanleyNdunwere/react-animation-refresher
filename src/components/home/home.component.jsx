import React from "react";
import "./home-component.css";
import ButtonComponent from "../../global/components/button/button.component";
import { motion, MotionConfig } from "framer-motion";

export default function HomeComponent(props) {
  const buttonVariants = {
    hover: {
      scale: 1.4,
      transition: {
        yoyo: Infinity,
      },
    },
  };

  const containerVariants = {
    init: {
      opacity: 0,
    },
    anim: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 },
    },
    // exit: {
    //   x: "100vw",
    //   transition: { ease: "easeInOut", duration: 0.5 },
    // },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="init"
      animate="anim"
      // exit="exit"
      className="content"
    >
      <div className="welcome-text">
        <h2>Welcome to Pizza Joint</h2>
      </div>
      <motion.div
        variants={buttonVariants}
        whileHover="hover"
        className="home-button-container"
      >
        <ButtonComponent
          performScale={false}
          {...props}
          execFunction={null}
          linkTo="/base"
          content="Create Your Pizza"
        />
      </motion.div>
    </motion.div>
  );
}
