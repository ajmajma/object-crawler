import React, { Component } from "react";
import "./App.css";

import TreeChart from "./components/tree-chart/component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Header</header>
        <TreeChart />
      </div>
    );
  }
}

export default App;
