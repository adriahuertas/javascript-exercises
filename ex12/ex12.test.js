import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"

import selectSleigh from "./ex12"

describe("selectSleigh", () => {
  it("should be a function", () => {
    expect(typeof selectSleigh).toBe("function")
  })

  it("should return null when no sleighs are passed", () => {
    expect(selectSleigh(1)).toBe(null)
  })

  it("should return the sleigh when only one is passed and meets requirements", () => {
    expect(selectSleigh(1, [{ name: "A", consumption: 1 }])).toEqual("A")
  })

  it("should return null when one sleigh is passed but doesn't meet requirements", () => {
    expect(selectSleigh(15, [{ name: "A", consumption: 2 }])).toEqual(null)
  })

  it("should return the one with bigger consumption that meets requirements when more than one sleigh is passed", () => {
    expect(
      selectSleigh(10, [
        { name: "A", consumption: 0.3 },
        { name: "B", consumption: 0.7 },
      ])
    ).toEqual("B")
  })

  it("should return dancer", () => {
    expect(
      selectSleigh(30, [
        { name: "Dasher", consumption: 0.3 },
        { name: "Dancer", consumption: 0.5 },
        { name: "Rudolph", consumption: 0.7 },
        { name: "Midu", consumption: 1 },
      ])
    ).toEqual("Dancer")
  })
})
