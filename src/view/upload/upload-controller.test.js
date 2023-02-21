import * as subject from "./upload-controller";
import { expect, test } from "@jest/globals";

import fetch from "jest-fetch-mock";

beforeEach(() => {
  fetch.resetMocks();
});

describe("test upload-controller", function () {
  test("test upload", async function () {
    // given
    const url = "http://alpha";
    const sessionId = "bravo";
    let formData = new FormData();
    formData.append("file", new Blob(), "somename");

    // and
    fetch.mockResponseOnce(
      JSON.stringify({
        success: true
      })
    );

    // when
    await subject.upload(url, sessionId, formData);

    // then
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://alpha/upload-file", {
      body: formData,
      headers: { "X-Auth-Token": "bravo" },
      method: "POST"
    });
  });
});
