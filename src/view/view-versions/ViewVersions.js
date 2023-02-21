import React, { Component } from "react";
import * as controller from "./view-versions-controller";
import AppState from "../../AppState";
import Menu from "../../component/menu/Menu";

class ViewVersions extends Component {
  constructor() {
    super();
    this.downloadClicked = this.downloadClicked.bind(this);
    this.uploadClicked = this.uploadClicked.bind(this);
    this.onFileChange = this.onFileChange.bind(this);

    const split = window.location.href.split("/");
    const docId = split[split.length - 1];

    this.state = {
      data: null,
      docId: docId,
      selectedFile: null
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

  async downloadClicked(event) {
    event.preventDefault();
    const docVersionId = event.target.name;
    const blob = await controller.download(
      AppState.getUrl(),
      AppState.getSessionId(),
      docVersionId
    );
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", this.state.data.doc.name);

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  }

  async uploadClicked(event) {
    event.preventDefault();

    const file = this.state.selectedFile;
    const formData = new FormData();

    // Update the formData object
    formData.append("file", file, file.name);

    const docId = this.state.data.doc.docId;

    await controller.upload(
      AppState.getUrl(),
      AppState.getSessionId(),
      docId,
      formData
    );

    window.location = `/view-versions/${docId}`;
  }

  onFileChange(event) {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
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
        <form
          onSubmit={this.uploadClicked}
          method="POST"
          encType="multipart/form-data"
        >
          <input type="file" name="file" onChange={this.onFileChange} />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
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
                  <button
                    name={version.docVersionId}
                    onClick={this.downloadClicked}
                  >
                    Download
                  </button>
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
