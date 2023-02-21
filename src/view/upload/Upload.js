import React, { Component } from "react";
import Menu from "../../component/menu/Menu";
import * as controller from "./upload-controller";
import AppState from "../../AppState";

class Upload extends Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);

    this.state = {
      selectedFile: null
    };
  }

  async submit(event) {
    event.preventDefault();

    const file = this.state.selectedFile;
    const formData = new FormData();

    // Update the formData object
    formData.append("file", file, file.name);

    await controller.upload(
      AppState.getUrl(),
      AppState.getSessionId(),
      formData
    );

    window.location = "/dashboard";
  }

  onFileChange(event) {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  render() {
    return (
      <div>
        <h1>Upload</h1>
        <Menu />
        <form
          onSubmit={this.submit}
          method="POST"
          encType="multipart/form-data"
        >
          <input type="file" name="file" onChange={this.onFileChange} />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Upload;
