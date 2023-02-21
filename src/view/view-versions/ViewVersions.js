import React, { Component } from "react";
import * as controller from "./view-versions-controller";
import AppState from "../../AppState";
import Menu from "../../component/menu/Menu";

class ViewVersions extends Component {
  constructor() {
    super();
    const split = window.location.href.split("/");
    const docId = split[split.length - 1];

    this.state = {
      data: null,
      docId: docId
    };
  }

  async componentDidMount() {
    const data = await controller.load(
      AppState.getUrl(),
      AppState.getSessionId(),
      this.state.docId
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

    const doc = this.state.data.doc;

    return (
      <div>
        <h1>{doc.name}</h1>
        <Menu />
        <h2>Add New Version</h2>
        <hr />
        <h2>Versions</h2>
        <table>
          <thead>
            <tr>
              <th>Version</th>
              <th>Uploaded</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {doc.versions.map((version) => (
              <tr key={version.docVersionId}>
                <td>{version.versionNum}</td>
                <td>
                  {new Date(version.createdDateTime).toLocaleDateString()}{" "}
                  {new Date(version.createdDateTime).toLocaleTimeString()}
                </td>
                <td>
                  <a href={`/version/download/${version.docVersionId}`}>
                    Download
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

export default ViewVersions;
