import * as subject from "./dashboard-controller";
import { expect, test } from "@jest/globals";
import * as httpUtil from "../../util/http-util";

beforeEach(() => {
  httpUtil.request = jest.fn();
});

describe("test dashboard-controller", function () {
  test("when load", async function () {
    // given
    const sessionId = "alpha";
    const url = "https://bravo";

    // and
    httpUtil.request.mockReturnValueOnce({ success: true });

    // when
    const result = await subject.load(url, sessionId);

    // then
    expect(result.success).toEqual(true);
    expect(httpUtil.request.mock.calls[0][0]).toBe("https://bravo/dashboard");
    expect(httpUtil.request.mock.calls[0][1]).toBe("GET");
    expect(httpUtil.request.mock.calls[0][2]).toStrictEqual({});
    expect(httpUtil.request.mock.calls[0][3]).toBe(null);
    expect(httpUtil.request.mock.calls[0][4]).toStrictEqual({
      "X-Auth-Token": "alpha"
    });
  });
});
