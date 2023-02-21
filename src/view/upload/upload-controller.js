async function upload(url, sessionId, formData) {
  const endpoint = `${url}/upload-file`;
  const headers = {
    "X-Auth-Token": sessionId
  };

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: formData
  };

  const response = await fetch(endpoint, requestOptions);
  console.log(response);
  const text = await response.text();
  console.log(text);
}

export { upload };
