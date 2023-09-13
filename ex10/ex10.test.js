import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"

import checkJump from "./ex10"

describe("checkJump", () => {
  it("should be a function", () => {
    expect(typeof checkJump).toBe("function")
  })

  it("should return false when no heights are passed", () => {
    expect(checkJump()).toBe(false)
  })

  it("should return false when the array have only one value", () => {
    expect(checkJump([1])).toBe(false)
  })

  it("should return true when the values describe a parabole", () => {
    expect(checkJump([1, 3, 8, 5, 2])).toBe(true)
  })

  it("should return false", () => {
    expect(checkJump([1, 7, 3, 5])).toBe(false)
  })

  it("should return true", () => {
    expect(checkJump([1, 3, 8, 5, 2])).toBe(true)
  })

  it("should return false", () => {
    expect(checkJump([2, 3, 3, 3, 3, 3])).toBe(false)
  })

  it("should return true", () => {
    expect(checkJump([2, 3, 3, 3, 3, 2])).toBe(true)
  })

  it("should return false", () => {
    expect(checkJump([3, 2, 2, 2, 2])).toBe(false)
  })
})
