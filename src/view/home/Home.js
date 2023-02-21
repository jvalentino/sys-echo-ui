import React, { Component } from "react";
import * as controller from "./home-controller";
import AppState from "../../AppState";
import * as errorModal from "../../component/errorModal/error-modal";
import { Navigate } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);

    this.state = {
      data: null,
      loggedIn: false
    };
  }

  async componentDidMount() {
    const result = await controller.load(AppState.getUrl());
    this.setState({
      data: result
    });
  }

  async submit(event) {
    event.preventDefault();

    const elements = event.target.elements;

    const email = elements["email"].value;
    const password = elements["password"].value;

    const result = await controller.login(AppState.getUrl(), email, password);

    if (result.success) {
      AppState.setSessionId(result.sessionId);
      this.setState({
        loggedIn: true
      });
    } else {
      errorModal.display(result.message);
    }
  }

  render() {
    if (this.state.data == null) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    if (this.state.loggedIn) {
      return <Navigate to="/dashboard" push={true} />;
    }

    return (
      <div>
        <h1>Document Management - Example System</h1>
        <p>
          This is an example system that it used to demonstrate different
          architectural approaches as they relate to scalability. Its core
          functions are the following:
        </p>
        <ul>
          <li>The system shall allow a user to add documents</li>
          <li>The system shall version documents</li>
          <li>The system shall allow a user to download a document</li>
        </ul>

        <hr />

        <table>
          <tbody>
            <tr>
              <td>
                <b>Served Users:</b>
              </td>
              <td>{this.state.data.users}</td>
            </tr>
            <tr>
              <td>
                <b>Served Documents:</b>
              </td>
              <td>{this.state.data.documents}</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <form onSubmit={this.submit}>
          <table>
            <tbody>
              <tr>
                <td>Email Address:</td>
                <td>
                  <input type="text" name="email" />
                </td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>
                  <input type="password" name="password" />
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Home;
