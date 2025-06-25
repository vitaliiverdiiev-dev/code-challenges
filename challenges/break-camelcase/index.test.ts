import { describe, it, expect } from "vitest";
import { breakCamelcase } from "./index";

describe("Sample tests", () => {
  it("Sample test 1", () => {
    expect(breakCamelcase("")).toBe("");
  });

  it("Sample test 2", () => {
    expect(breakCamelcase("camelCasing")).toBe("camel Casing");
  });

  it("Sample test 3", () => {
    expect(breakCamelcase("camelCasingTest")).toBe("camel Casing Test");
  });
});
