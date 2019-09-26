import React from "react";

const RadioGroup = ({ props, handleChange }) => {
  let styleObj = props;

  return (
    <div style={styleObj}>
      <label> {props.label}: </label>
      {props.options.map(el => (
        <span>
          {el.label}
          <input
            type="radio"
            value={el.label}
            name={props.label}
            onChange={e => handleChange(e.target.value, props.label)}
          />
        </span>
      ))}
    </div>
  );
};

export default RadioGroup;
