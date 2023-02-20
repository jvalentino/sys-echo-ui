import Cookies from "universal-cookie";

let instance = null;

class AppState {
  cookies = new Cookies();

  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getSessionId() {
    return this.cookies.get("sys-echo-session-id");
  }

  setSessionId(sessionId) {
    this.cookies.set("sys-echo-session-id", sessionId);
  }

  getUrl() {
    return process.env.REACT_APP_HTTP_API;
  }

  getInstance() {
    return this;
  }
}

const singletonCounter = Object.freeze(new AppState());
export default singletonCounter;
