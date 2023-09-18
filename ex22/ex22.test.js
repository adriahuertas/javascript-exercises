import { describe, it, expect } from "vitest"

import { checkStepNumbers } from "./ex22"

describe("checkStepNumbers", () => {
  it("should be a function", () => {
    expect(typeof checkStepNumbers).toBe("function")
  })

  it("should return false if no system names are provided", () => {
    expect(checkStepNumbers()).toBe(false)
  })

  it("should return false if no step numbers are provided", () => {
    expect(checkStepNumbers(["A"])).toBe(false)
  })

  it("should return true", () => {
    const systemNames = [
      "tree_1",
      "tree_2",
      "house",
      "tree_1",
      "tree_2",
      "house",
    ]
    const stepNumbers = [1, 33, 10, 2, 44, 20]
    expect(checkStepNumbers(systemNames, stepNumbers)).toBe(true)
  })

  it("should return false", () => {
    expect(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])).toBe(
      false
    )
  })
})
