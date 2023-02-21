import React, { Component } from "react";
//import PropTypes from "prop-types";

//import * as controller from "./dashboard-controller";
//import AppState from "../../AppState";
//import Menu from "../../component/menu/Menu";

class ViewVersions extends Component {
  constructor() {
    super();
    //let { id } = this.props.params;
    console.log(this.props);

    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    /*const data = await controller.load(AppState.getUrl(), AppState.getSessionId());

    this.setState({
      data: data
    });*/
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

export default ViewVersions;
