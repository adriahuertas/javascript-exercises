import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"

import decorateTree from "./ex15"

describe("decorateTree", () => {
  it("should be a function", () => {
    expect(typeof decorateTree).toBe("function")
  })

  it("should return an empty array when no tree is passed", () => {
    expect(decorateTree()).toEqual([])
  })

  it("should return the same letter when two equal letters are passed", () => {
    expect(decorateTree("B B")).toEqual(["B", "B B"])
  })
})
