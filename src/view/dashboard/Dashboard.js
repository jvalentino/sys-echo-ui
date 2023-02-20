import React, { Component } from "react";
//import * as controller from "./home-controller";
//import AppState from "../../AppState";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      data: null
    };
  }

  async componentDidMount() {}

  render() {
    if (this.state.data == null) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    return <div></div>;
  }
}

export default Dashboard;
