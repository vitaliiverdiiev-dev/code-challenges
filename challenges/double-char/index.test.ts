import { describe, it, expect } from "vitest"
import { doubleChar } from "./index" // adjust path as needed

describe("doubleChar", () => {
  it("works for some examples", () => {
    expect(doubleChar("abcd")).toBe("aabbccdd")
    expect(doubleChar("Adidas")).toBe("AAddiiddaass")
    expect(doubleChar("1337")).toBe("11333377")
    expect(doubleChar("illuminati")).toBe("iilllluummiinnaattii")
    expect(doubleChar("123456")).toBe("112233445566")
    expect(doubleChar("%^&*(")).toBe("%%^^&&**((")
  })
})
