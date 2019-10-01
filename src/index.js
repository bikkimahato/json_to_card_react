import React from "react";
import ReactDOM from "react-dom";
import Routes from './UI-Routers/Routes/main'
import './styles.css'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
