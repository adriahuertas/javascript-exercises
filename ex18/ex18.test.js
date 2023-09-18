import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"

import dryNumber from "./ex18"

describe("dryNumber", function () {
  it("should be a function", () => {
    expect(typeof dryNumber).toBe("function")
  })

  it("should return an empty array if no arguments are passed", () => {
    expect(dryNumber()).toEqual([])
  })

  it("should return [1, 10, 11, 12, 13, 14, 15]", () => {
    expect(dryNumber(1, 15)).toEqual([1, 10, 11, 12, 13, 14, 15])
  })

  it("should return [2, 12, 20]", () => {
    expect(dryNumber(2, 20)).toEqual([2, 12, 20])
  })
})
