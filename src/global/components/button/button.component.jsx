import React from "react";
import "../../../global/components/button/button.css";

export default function ButtonComponent(props) {
  const { content, execFunction, linkTo, ...rest } = { ...props };

  let handleClick = (props) => {
    const { history, execFunction, linkTo, ...rest } = { ...props };
    if (execFunction !== null) {
      execFunction();
    }
    history.push(linkTo);
  };

  return (
    <div className="button" onClick={() => handleClick(props)}>
      <span>{content}</span>
    </div>
  );
}
