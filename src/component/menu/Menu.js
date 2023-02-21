import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div>
        <hr />

        <table>
          <tbody>
            <tr>
              <td>
                <a href="/">Login</a>
              </td>
              <td>|</td>
              <td>
                <a href="/dashboard">Dashboard</a>
              </td>
              <td>|</td>
              <td>
                <a href="/upload">Upload</a>
              </td>
            </tr>
          </tbody>
        </table>

        <hr />
      </div>
    );
  }
}

export default Menu;
