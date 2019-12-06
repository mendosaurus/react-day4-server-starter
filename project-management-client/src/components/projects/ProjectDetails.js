import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditProject from "./EditProject";

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleProject();
  }

  getSingleProject = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/projects/${params.id}`)
      .then(responseFromApi => {
        const theProject = responseFromApi.data;
        this.setState(theProject);
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderEditForm = () => {
    if (!this.state.title) {
      this.getSingleProject();
    } else {
      //                                                                                          ^
      //                                                                                          |
      //{...props} => so we can have 'this.props.history' in Edit.js
      return (
        <EditProject
          theProject={this.state}
          getTheProject={this.getSingleProject}
          {...this.props}
        />
      );
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        {/*  ↓checks if this.state has any properties (we picked title), and if that’s true, it’s invoking the getSingleProject() method which gets the project object from our API and sets it to the state of the component */}
        <div>{this.renderEditForm()} </div>
        <Link to={"/projects"}>Back to projects</Link>
      </div>
    );
  }
}

export default ProjectDetails;
