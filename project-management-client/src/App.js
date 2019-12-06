import React, { Component } from "react";
import "./App.css";
// import AddProject from "./components/projects/AddProject";
import ProjectList from "./components/projects/ProjectList";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AddProject /> */}
        <ProjectList />
      </div>
    );
  }
}

export default App;