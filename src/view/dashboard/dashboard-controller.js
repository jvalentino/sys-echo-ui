import * as httpUtil from "../../util/http-util";

async function load(url, sessionId) {
  const endpoint = `${url}/dashboard`;
  const headers = {
    "X-Auth-Token": sessionId
  };

  const result = await httpUtil.request(endpoint, "GET", {}, null, headers);
  console.log(result);
  return result;
}

export { load };
