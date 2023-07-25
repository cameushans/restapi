import { callbackPattern } from "../services/obs.js";

describe("should return good count", () => {
  test("make good count", () => {
    expect(callbackPattern("Callback coding style")).toBe(
      "Callback coding style".toUpperCase()
    );
  });
});
