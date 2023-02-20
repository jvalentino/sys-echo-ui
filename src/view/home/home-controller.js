import * as httpUtil from "../../util/http-util";

async function load(url) {
  const endpoint = `${url}/`;

  const result = await httpUtil.request(endpoint, "GET", {}, null);
  console.log(result);
  return result;
}

async function login(url, email, password) {
  const endpoint = `${url}/custom-login`;
  const body = {
    email: email,
    password: password
  };

  const result = await httpUtil.request(endpoint, "POST", {}, body);
  console.log(result);
  return result;
}

export { load, login };
