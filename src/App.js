import React, { Component } from "react";
import "./App.css";
import TreeChart from "./components/tree-chart/component";

class App extends Component {
  componentWillMount() {
    const objectNodeCheck = {
      state: {
        todos: [
          { title: "d3" },
          { title: "state" },
          { title: "visualizer" },
          { title: "tree" }
        ],
        completedCount: 1,
        alphabeticalOrder: true
      }
    };

    const app = this;

    const handler = {
      set(target, key, value) {
        console.log("changed!", app);
        app.setState({});
        target[key] = value;
      }
    };

    window.objectNodeCheck = new Proxy(objectNodeCheck, handler);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">Header</header>
        <TreeChart tree={window.objectNodeCheck} />
      </div>
    );
  }
}

export default App;
