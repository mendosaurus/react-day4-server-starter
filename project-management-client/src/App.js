import React, { Component } from "react";
import "./App.css";
// import AddProject from "./components/projects/AddProject";
import { Switch, Route } from "react-router-dom";

import ProjectList from "./components/projects/ProjectList";
import Navbar from "./components/navbar/Navbar";
import ProjectDetails from "./components/projects/ProjectDetails";
import TaskDetails from "./components/tasks/TaskDetails"; // <== import the TaskDetails component

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          {/* added to display task details page: */}
          <Route
            exact
            path="/projects/:id/tasks/:taskId"
            component={TaskDetails}
          />{" "}
          {/* <== !!! */}
        </Switch>
      </div>
    );
  }
}

export default App;
