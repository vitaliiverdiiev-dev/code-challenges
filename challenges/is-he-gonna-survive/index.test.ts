import { describe, it, expect } from "vitest";
import { isHeGonnaSurvive } from "./index";

describe("Fixed tests", () => {
  it("Testing for fixed tests", () => {
    expect(isHeGonnaSurvive(10, 5)).toBe(true);
    expect(isHeGonnaSurvive(7, 4)).toBe(false);
    expect(isHeGonnaSurvive(4, 5)).toBe(false);
    expect(isHeGonnaSurvive(100, 40)).toBe(true);
    expect(isHeGonnaSurvive(1500, 751)).toBe(false);
    expect(isHeGonnaSurvive(0, 1)).toBe(false);
  });
});
