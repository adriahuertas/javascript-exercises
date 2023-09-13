import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"

import getGiftsToRefill from "./ex7"

describe("getGiftsToRefill", () => {
  it("should be a function", () => {
    expect(typeof getGiftsToRefill).toBe("function")
  })

  it("should return an empty array if there isn't any gift to refill", () => {
    expect(getGiftsToRefill()).toEqual([])
  })

  it("should return all values that only appear in one of the three arrays", () => {
    expect(
      getGiftsToRefill(
        ["bici", "coche", "bici", "bici"],
        ["coche", "bici", "muñeca", "coche"],
        ["bici", "pc", "pc"]
      )
    ).toEqual(["muñeca", "pc"])
  })
})
