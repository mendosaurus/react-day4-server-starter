import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddProject from "./AddProject"; // <== !!!

class ProjectList extends Component {
  constructor() {
    super();
    this.state = { listOfProjects: [] };
  }

  getAllProjects = () => {
    axios.get(`http://localhost:5000/api/projects`).then(responseFromApi => {
      this.setState({
        listOfProjects: responseFromApi.data
      });
    });
  };

  // we use componentDidMount() lifecycle method to fetch the data from API (this is very much standard practice);
  componentDidMount() {
    this.getAllProjects();
  }

  render() {
    return (
      <div>
        <div style={{ width: "60%", float: "left" }}>
          {/* use map() to list the projects (don’t forget to give each element the database ID as the key with key={project._id}); */}
          {this.state.listOfProjects.map(project => {
            return (
              <div key={project._id}>
                {/* we use <Link /> component from react-router-dom library to be able to dynamically change URL and in our case, to go to project’s detail page (that’s our next thing to work on); */}
                <Link to={`/projects/${project._id}`}>
                  <h3>{project.title}</h3>
                </Link>
                {/*  added so the tasks can be displayed:   */}
                <ul>
                  {project.tasks.map((task, index) => {
                    return <li key={index}>{task.title}</li>;
                  })}
                </ul>
                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
              </div>
            );
          })}
        </div>
        <div style={{ width: "40%", float: "right" }}>
          <AddProject getData={() => this.getAllProjects()} /> {/* <== !!! */}
        </div>
      </div>
    );
  }
}

export default ProjectList;
