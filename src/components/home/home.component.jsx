import React from "react";
import "./home-component.css";
import ButtonComponent from "../../global/components/button/button.component";
import { motion, MotionConfig } from "framer-motion";

export default function HomeComponent(props) {
  return (
    <div className="content">
      <div className="welcome-text">
        <h2>Welcome to Pizza Joint</h2>
      </div>
      <div className="home-button-container">
        <ButtonComponent
          {...props}
          execFunction={null}
          linkTo="/base"
          content="Create Your Pizza"
        />
      </div>
    </div>
  );
}
