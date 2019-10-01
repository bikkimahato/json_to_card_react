import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ScreenInterface from '../../UI-Pages/ScreenInterface'


class Routes extends React.Component {
  render() {
    let pathVariable = window.location.pathname;
    console.log(pathVariable, 'pathname');

    return (
      <div className="App">
        <Router>
          <Route exact path={this.pathVariable} component={ScreenInterface} />
        </Router>
      </div>
    );
  }
}

export default Routes