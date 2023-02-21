async function request(url, type, parameters, body, headers = {}) {
  const endpoint = generateEndpoint(url, parameters);
  const requestOptions = generateRequestOptions(type, body, headers);
  console.log(endpoint);
  console.log(requestOptions);

  const response = await fetch(endpoint, requestOptions);

  const text = await response.text();
  const result = JSON.parse(text);

  return result;
}

function generateRequestOptions(type, body, headers) {
  let requestOptions = null;
  headers["Content-Type"] = "application/json";

  switch (type) {
    case "GET":
      requestOptions = {
        method: "GET",
        headers: headers
      };
      break;
    case "POST":
      requestOptions = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      };
      break;
    case "DELETE":
      requestOptions = {
        method: "DELETE",
        headers: headers
      };
      break;
  }

  return requestOptions;
}

function generateEndpoint(url, parameters) {
  let endpoint = url;

  let i = 0;
  const entries = Object.entries(parameters);
  for (const [key, value] of entries) {
    if (i == 0) {
      endpoint += "?";
    }

    endpoint += `${key}=${value}`;

    if (i != entries.length - 1) {
      endpoint += "&";
    }

    i++;
  }

  return endpoint;
}

export { request, generateEndpoint, generateRequestOptions };
