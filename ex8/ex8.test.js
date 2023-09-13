import { describe, it, expect } from "vitest"

import checkPart from "./ex8"

describe("checkPart", () => {
  it("should be a function", () => {
    expect(typeof checkPart).toBe("function")
  })

  it("should return false when no part is passed", () => {
    expect(checkPart()).toBe(false)
  })

  it("it should return true when the part is palindrome", () => {
    expect(checkPart("ana")).toBe(true)
  })

  it("should return true if, removing one letter as maximum, it's a palindrome", () => {
    expect(checkPart("aniinam")).toBe(true)
  })

  it("should return false if it's not a palindrome", () => {
    expect(checkPart("anita lava la tina")).toBe(false)
  })

  it("should return false if, removing one letter as maximum, it's not a palindrome", () => {
    expect(checkPart("anita lava la tina")).toBe(false)
  })
})
