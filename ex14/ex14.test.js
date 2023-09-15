import { it, expect, describe } from "vitest"

import getOptimalPath from "./ex14"

describe("getOptimalPath", () => {
  it("should be a function", () => {
    expect(typeof getOptimalPath).toBe("function")
  })

  it("should return 0 an empty array", () => {
    expect(getOptimalPath([])).toBe(0)
  })

  it("should return the value if only one element", () => {
    expect(getOptimalPath([[1]])).toBe(1)
  })

  it("should return the less weighted path when there are two elements", () => {
    expect(getOptimalPath([[1], [2, 3]])).toBe(3)
  })

  it("should return 5", () => {
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toBe(5)
  })

  it("should return 8", () => {
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toBe(8)
  })
})
