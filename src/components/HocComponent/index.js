import React from "react";

const hoc = config => Component => {
  class HocComponent extends React.Component {
    state = {
      dataChange: {}
    };

    handleChange = (value, key) => {
      let { dataChange } = this.state;

      this.setState({
        ...this.state,
        dataChange: { ...dataChange, [key]: value }
      });
    };

    onFlexiSubmit = e => {
      e.preventDefault();
      console.log(this.state.dataChange);
    };

    render() {
      console.log(this.state.dataChange);

      return (
        <Component
          config={config}
          handleChange={this.handleChange}
          onFlexiSubmit={this.onFlexiSubmit}
          {...this.props}
        />
      );
    }
  }
  return HocComponent;
};
export default hoc;
