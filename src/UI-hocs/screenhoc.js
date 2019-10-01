import React from "react";

const hoc = () => Component => {


  class HocComponent extends React.Component {
    state = {
      dataChange: {},
      hasPath: false
    };
    componentDidMount() {
      this.pathChangeHandler()
    }
    pathChangeHandler = () => {
      const { match } = this.props;
      const { params } = match;

      const receiveConifg = require(`../UI-Config/screen/specs/${params.path}`).default;

      this.setState({
        hasPath: true,
        receiveConifg
      })
    }

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
        <div>
          {this.state.hasPath ?
            <Component
              config={this.state.receiveConifg}
              handleChange={this.handleChange}
              onFlexiSubmit={this.onFlexiSubmit}
              {...this.props}
            /> : null
          }
        </div>
      );
    }
  }
  return HocComponent;
};
export default hoc;
