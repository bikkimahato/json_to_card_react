import React from "react";

const Card = ({ props }) => {
  let styleObject = props;

  return (
    <div style={styleObject}>
      <label>{props.label}</label>
    </div>
  );
};

export default Card;
