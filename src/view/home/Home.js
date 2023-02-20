import React, { Component } from "react";
import * as controller from "./home-controller";

class Home extends Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);

    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    const result = await controller.load("http://localhost:8080");
    this.setState({
      data: result
    });
  }

  async submit(event) {
    event.preventDefault();

    const elements = event.target.elements;

    const email = elements["email"].value;
    const password = elements["password"].value;

    await controller.login("http://localhost:8080", email, password);
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
