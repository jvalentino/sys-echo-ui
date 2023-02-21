import React, { Component } from "react";
import * as controller from "./dashboard-controller";
import AppState from "../../AppState";
import Menu from "../../component/menu/Menu";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    const data = await controller.load(
      AppState.getUrl(),
      AppState.getSessionId()
    );

    this.setState({
      data: data
    });
  }

  render() {
    if (this.state.data == null) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
      <div>
        <h1>Dashboard</h1>
        <Menu />

        <table>
          <thead>
            <tr>
              <th>Document Name</th>
              <th>Last Updated By</th>
              <th>Last Updated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.documents.map((document) => (
              <tr key={document.docId}>
                <td>{document.name}</td>
                <td>{document.updatedByUser.email}</td>
                <td>{document.updatedDateTime}</td>
                <td>
                  <a href={`./view-versions/${document.docId}`}>
                    View Versions
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
