import React, { Component } from "react";
import * as controller from "./dashboard-controller";
import AppState from "../../AppState";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    await controller.load(AppState.getUrl(), AppState.getSessionId());
  }

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
