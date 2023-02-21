import * as subject from "./home-controller";
import { expect, test } from "@jest/globals";
import * as httpUtil from "../../util/http-util";

beforeEach(() => {
  httpUtil.request = jest.fn();
});

describe("test home-controller", function () {
  test("test load", async function () {
    // given
    const url = "https://bravo";

    // and
    httpUtil.request.mockReturnValueOnce({ success: true });

    // when
    const result = await subject.load(url);

    // then
    expect(result.success).toEqual(true);
    expect(httpUtil.request.mock.calls[0][0]).toBe("https://bravo/");
    expect(httpUtil.request.mock.calls[0][1]).toBe("GET");
    expect(httpUtil.request.mock.calls[0][2]).toStrictEqual({});
    expect(httpUtil.request.mock.calls[0][3]).toBe(null);
  });

  test("test login", async function () {
    // given
    const url = "https://bravo";
    const email = "charlie";
    const password = "delta";

    // and
    httpUtil.request.mockReturnValueOnce({ success: true });

    // when
    const result = await subject.login(url, email, password);

    // then
    expect(result.success).toEqual(true);
    expect(httpUtil.request.mock.calls[0][0]).toBe(
      "https://bravo/custom-login"
    );
    expect(httpUtil.request.mock.calls[0][1]).toBe("POST");
    expect(httpUtil.request.mock.calls[0][2]).toStrictEqual({});
    expect(httpUtil.request.mock.calls[0][3]).toStrictEqual({
      email: "charlie",
      password: "delta"
    });
  });
});
