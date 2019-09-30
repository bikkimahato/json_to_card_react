import React from "react";
import Flexi from "../Flexi";
import hoc from "../HocComponent";
import registrationConfig from "./registrationConfig";

class Registration extends React.Component {
  render() {
    return (
      <div>
        <Flexi
          config={this.props.config}
          handleChange={this.props.handleChange}
          onFlexiSubmit={this.props.onFlexiSubmit}
        />
      </div>
    );
  }
}

export default hoc(registrationConfig)(Registration);
