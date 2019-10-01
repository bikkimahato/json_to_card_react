import React from "react";

import { HashRouter as Router, Route } from "react-router-dom";
import ScreenInterface from '../../UI-Pages/ScreenInterface'

class Routes extends React.Component {
  render() {
    
    return (
      <div className="App">
        <Router>
          <Route exact path={`/screen-interface/:path`} component={ScreenInterface} />
        </Router>
      </div>
    );
  }
}

export default Routes