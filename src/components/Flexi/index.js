import React from "react";

const Flexi = ({ config, handleChange, onFlexiSubmit }) => {
  let cTypes = config.items;

  const getComponent = cTypes => {
    return cTypes.map(el => {
      return displayFields(el);
    });
  };

  const displayFields = el => {
    let child = [];
    if (el.children) {
      child = getComponent(el.children.items);
    }
    let Fcomp = require(`../${el.type}`).default;

    return (
      <Fcomp
        props={el.props}
        child={child}
        handleChange={handleChange}
        onFlexiSubmit={onFlexiSubmit}
      />
    );
  };
  return <div>{getComponent(cTypes)}</div>;
};

export default Flexi;
