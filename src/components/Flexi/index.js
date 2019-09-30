import React from "react";
import Header from "../Header/index";
import TextField from "../TextField/index";
import Card from "../Card";
import Cards from "../Cards";
import Button from "../Button";
import RadioGroup from "../RadioGroup";

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
    // var fcomp = require(`../${el.type}`);
    // console.log(fcomp);

    // return <fcomp props={el.props} child={child} />;
    if (el.type === "Card") {
      return <Card props={el.props} child={child} />;
    }
    if (el.type === "Cards") {
      return <Cards props={el.props} />;
    }
    if (el.type === "Header") {
      return <Header props={el.props} />;
    }
    if (el.type === "TextField") {
      return <TextField props={el.props} handleChange={handleChange} />;
    }
    if (el.type === "Button") {
      return <Button props={el.props} onFlexiSubmit={onFlexiSubmit} />;
    }
    if (el.type === "RadioGroup") {
      return <RadioGroup props={el.props} handleChange={handleChange} />;
    }
  };

  return <div>{getComponent(cTypes)}</div>;
};

export default Flexi;
