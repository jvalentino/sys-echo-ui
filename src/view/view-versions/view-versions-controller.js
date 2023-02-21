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
  console.log(blob);
  return blob;
}

export { load, download };
