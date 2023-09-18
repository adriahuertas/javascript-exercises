import { expect, it, describe } from "vitest"

import { sortToys } from "./ex19"

describe("", () => {
  it("should be a function", () => {
    expect(typeof sortToys).toBe("function")
  })

  it("should return an empty array if no toys nor positions are passed", () => {
    expect(sortToys()).toEqual([])
  })

  it("should return ['puzzle', 'car', 'ball', 'doll']", () => {
    expect(sortToys(["ball", "doll", "car", "puzzle"], [2, 3, 1, 0])).toEqual([
      "puzzle",
      "car",
      "ball",
      "doll",
    ])
  })

  it("should return ['ps4', 'xbox', 'switch', 'pc', 'nintendo']", () => {
    expect(
      sortToys(["pc", "xbox", "ps4", "switch", "nintendo"], [8, 6, 5, 7, 9])
    )
  })
})
