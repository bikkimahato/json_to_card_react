import React from "react";

const Card = ({ props, child }) => {
  let styleObject = props;

  return (
    <div style={styleObject}>
      <label>{props.label}</label>
      {child}
    </div>
  );
};

export default Card;
