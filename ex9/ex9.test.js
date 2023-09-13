import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"

import countTime from "./ex9"

describe("countTime", () => {
  it("should be a function", () => {
    expect(typeof countTime).toBe("function")
  })

  it("should return 0 when no leds are passed", () => {
    expect(countTime()).toBe(0)
  })

  it("should return 0 when all leds are on", () => {
    expect(countTime([1, 1, 1, 1, 1, 1, 1])).toBe(0)
  })

  it("should return 7 when only one led is off", () => {
    expect(countTime([1, 1, 1, 1, 1, 1, 0])).toBe(7)
  })

  it("should return 21", () => {
    expect(countTime([0, 0, 0, 1])).toBe(21)
  })

  it("should return 28", () => {
    expect(countTime([0, 0, 1, 0, 0])).toBe(28)
  })
})
