import * as httpUtil from "../../util/http-util";

async function load(url, sessionId, docId) {
  const endpoint = `${url}/view-versions/${docId}`;
  const headers = {
    "X-Auth-Token": sessionId
  };

  const result = await httpUtil.request(endpoint, "GET", {}, null, headers);
  console.log(result);
  return result;
}

// https://stackoverflow.com/questions/50694881/how-to-download-file-in-react-js
async function download(url, sessionId, docVersionId) {
  const endpoint = `${url}/version/download/${docVersionId}`;
  const headers = {
    "X-Auth-Token": sessionId
  };

  const requestOptions = {
    method: "GET",
    headers: headers
  };

  const response = await fetch(endpoint, requestOptions);

  const blob = await response.blob();
  return blob;
}

async function upload(url, sessionId, docId, formData) {
  const endpoint = `${url}/version/new/${docId}`;
  const headers = {
    "X-Auth-Token": sessionId
  };

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: formData
  };

  const response = await fetch(endpoint, requestOptions);
  const text = await response.text();
  console.log(text);
}

export { load, download, upload };
