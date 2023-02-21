import * as subject from "./view-versions-controller";
import { expect, test } from "@jest/globals";
import * as httpUtil from "../../util/http-util";

import fetch from "jest-fetch-mock";

beforeEach(() => {
  fetch.resetMocks();
  httpUtil.request = jest.fn();
});

describe("test view-versions-controller", function () {
  test("test load", async function () {
    // given
    const url = "https://bravo";
    const sessionId = "charlie";
    const docId = 3;

    // and
    httpUtil.request.mockReturnValueOnce({ success: true });

    // when
    const result = await subject.load(url, sessionId, docId);

    // then
    expect(result.success).toEqual(true);
    expect(httpUtil.request.mock.calls[0][0]).toBe(
      "https://bravo/view-versions/3"
    );
    expect(httpUtil.request.mock.calls[0][1]).toBe("GET");
    expect(httpUtil.request.mock.calls[0][2]).toStrictEqual({});
    expect(httpUtil.request.mock.calls[0][3]).toBe(null);
    expect(httpUtil.request.mock.calls[0][4]).toStrictEqual({
      "X-Auth-Token": "charlie"
    });
  });

  test("test upload", async function () {
    // given
    const url = "http://alpha";
    const sessionId = "bravo";
    const docId = 3;
    let formData = new FormData();
    formData.append("file", new Blob(), "somename");

    // and
    fetch.mockResponseOnce(
      JSON.stringify({
        success: true
      })
    );

    // when
    await subject.upload(url, sessionId, docId, formData);

    // then
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://alpha/version/new/3", {
      body: formData,
      headers: { "X-Auth-Token": "bravo" },
      method: "POST"
    });
  });
});
