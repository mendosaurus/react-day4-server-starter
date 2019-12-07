import React, { Component } from "react";
import axios from "axios";  

export default class TaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getTheTask();
  }

  getTheTask = () => {
    const { params } = this.props.match;

    axios
      .get(
        `http://localhost:5000/api/projects/${params.id}/tasks/${params.taskId}`
      )
      .then(responseFromApi => {
        const theTask = responseFromApi.data;
        this.setState(theTask);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return <div></div>;
  }
}
