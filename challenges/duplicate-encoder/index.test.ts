import { duplicateEncoder } from "./index";

import { describe, it, expect } from "vitest";

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    expect(duplicateEncoder("din")).toBe("(((");
    expect(duplicateEncoder("recede")).toBe("()()()");
    expect(duplicateEncoder("Success")).toBe(")())())"); // should ignore case
    expect(duplicateEncoder("(( @")).toBe("))((");
  });
});

test("performance: memory + time", () => {
  const input = "some large input string... ".repeat(10_000);

  const toMB = (bytes: number): string => (bytes / 1024 / 1024).toFixed(2);

  const memBefore = process.memoryUsage().heapUsed;
  const timeStart = performance.now();

  duplicateEncoder(input);

  const timeEnd = performance.now();
  const memAfter = process.memoryUsage().heapUsed;

  console.log(`Heap used before: ${toMB(memBefore)} MB`);
  console.log(`Heap used after:  ${toMB(memAfter)} MB`);
  console.log(`Difference:       ${toMB(memAfter - memBefore)} MB`);
  console.log(`Execution time:   ${(timeEnd - timeStart).toFixed(2)} ms`);
});
