import React from "react";

const Header = ({ props }) => {
  let styleObj = props;

  return (
    <div style={styleObj}>
      <label>{props.label}</label>
    </div>
  );
};

export default Header;
