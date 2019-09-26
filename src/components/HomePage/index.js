import React from "react";
import Flexi from "../Flexi";
import hoc from "../HocComponent";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Flexi
          config={this.props.config.flexConfigForHome}
          handleChange={this.props.handleChange}
          onFlexiSubmit={this.props.onFlexiSubmit}
        />
      </div>
    );
  }
}

export default hoc()(HomePage);
